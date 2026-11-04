import { PERFORMANCE_ACTIONS, PERFORMANCE_TASKS, performanceAction } from './performance-library';
import { PerformanceGame } from './performance-game';

interface PerformancePanelOptions {
  game: PerformanceGame;
  onEnter: () => void; onExit: () => void; onReset: () => void;
  onPreview: () => void; onPlay: () => void; onPause: () => void;
  onResume: () => void; onStop: () => void;
}

/** Content-sized task/sequence editor with the exhibit's familiar grouped action menu. */
export class PerformancePanel {
  private readonly $ = (id: string) => document.getElementById(id)!;
  private readonly events: Array<() => void> = [];
  private readonly stepButtons: HTMLButtonElement[] = [];
  private readonly taskButtons: HTMLButtonElement[] = [];
  private readonly actionSelect = this.$('performance-action') as HTMLSelectElement;
  private readonly progress = this.$('performance-play-progress') as HTMLProgressElement;
  private lastRender = '';
  private lastPlayback = '';
  private playbackStep: number | null = null;
  private activeState = false;
  get active(): boolean { return this.activeState; }

  constructor(private readonly options: PerformancePanelOptions) {
    const listen = (node: HTMLElement, event: string, callback: EventListener) => {
      node.addEventListener(event, callback);
      this.events.push(() => node.removeEventListener(event, callback));
    };
    const onClick = (id: string, callback: () => void) => listen(this.$(id), 'click', callback);
    for (const task of PERFORMANCE_TASKS) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'performance-task-card'; button.dataset.task = task.id;
      const [badge, title] = task.title.split(' / ');
      button.innerHTML = '<span>' + badge + '</span><b>' + title + '</b>';
      listen(button, 'click', () => {
        if (this.options.game.busy) return;
        this.options.game.selectTask(task.id); this.options.onReset(); this.render();
      });
      this.taskButtons.push(button); this.$('performance-task-cards').append(button);
    }
    const groups = new Map<string, HTMLOptGroupElement>();
    for (const action of PERFORMANCE_ACTIONS) {
      let group = groups.get(action.group);
      if (!group) { group = document.createElement('optgroup'); group.label = action.group; groups.set(action.group, group); this.actionSelect.append(group); }
      const option = document.createElement('option'); option.value = action.id; option.textContent = action.title; group.append(option);
    }
    for (let index = 0; index < 4; index++) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'performance-step';
      button.innerHTML = '<span>0' + (index + 1) + '</span><b>＋ 添加动作</b>';
      listen(button, 'click', () => { this.options.game.select(index); this.render(); });
      this.stepButtons.push(button); this.$('performance-steps').append(button);
    }
    listen(this.actionSelect, 'change', () => {
      if (!this.actionSelect.value) return;
      this.options.game.choose(this.actionSelect.value); this.render();
    });
    onClick('performance-top-entry', () => this.activeState ? this.leave() : this.enter());
    onClick('leave-performance', () => this.leave());
    onClick('performance-preview', () => this.options.onPreview());
    onClick('performance-play', () => this.options.onPlay());
    onClick('performance-pause', () => this.options.game.status === 'paused' ? this.options.onResume() : this.options.onPause());
    onClick('performance-stop', () => this.options.onStop());
    for (const tempo of ['calm', 'lively'] as const) onClick('performance-tempo-' + tempo, () => { this.options.game.setTempo(tempo); this.render(); });
    onClick('performance-step-up', () => { this.options.game.move(-1); this.render(); });
    onClick('performance-step-down', () => { this.options.game.move(1); this.render(); });
    onClick('performance-step-remove', () => { this.options.game.remove(); this.render(); });
    this.render();
  }
  enter(): void { if (!this.activeState) { this.activeState = true; this.options.onEnter(); this.render(); } }
  leave(): void { if (this.activeState) { this.options.onStop(); this.activeState = false; this.options.onExit(); this.render(); } }
  update(): void { if (this.activeState) this.render(); }

  playback(progress: number, index: number, closing: boolean, preview: boolean): void {
    const percent = Math.round(Math.max(0, Math.min(1, progress)) * 100);
    const key = [percent, index, closing, preview].join('|');
    if (key === this.lastPlayback) return;
    this.lastPlayback = key;
    if (this.playbackStep !== index) { this.playbackStep = index; this.render(); }
    this.progress.value = percent;
    this.$('performance-now-label').textContent = closing ? '谢幕 / 自然收回' : preview ? '单步预览 / 不计任务分' : '正在演出 / 第 ' + (index + 1) + ' 步';
    this.stepButtons.forEach((button, i) => button.dataset.playing = String(!closing && i === index));
  }
  private render(): void {
    const game = this.options.game;
    const focus = game.busy ? this.playbackStep ?? (game.status === 'preview' ? game.selected : 0) : game.selected;
    const id = game.steps[focus], action = id ? performanceAction(id) : undefined;
    const busy = game.busy, result = game.status === 'result' ? game.result : null;
    const key = JSON.stringify([this.activeState, game.task.id, game.steps, game.selected, focus, game.tempo, game.status, result]);
    if (key === this.lastRender) return;
    this.lastRender = key;
    this.$('performance-game').dataset.status = game.status;
    this.$('performance-game').dataset.task = game.task.id;
    const entry = this.$('performance-top-entry'); entry.setAttribute('aria-pressed', String(this.activeState));
    entry.querySelector('b')!.textContent = this.activeState ? '返回关节探索' : '编排一场表演';
    entry.querySelector('small')!.textContent = this.activeState ? '保留编排 · 随时回来继续' : '迎宾 · 讲解 · 舞蹈 / 12 个协同动作';
    this.$('performance-brief').textContent = game.task.brief;
    this.$('performance-help').textContent = game.task.rule;
    this.$('performance-progress').textContent = game.steps.length + ' / ' + game.task.slots + ' 步';
    this.$('performance-action-label').textContent = busy ? '02 / 当前动作 · 第 ' + (focus + 1) + ' 步' : '02 / 为第 ' + (game.selected + 1) + ' 步挑动作';
    this.actionSelect.value = id ?? ''; this.actionSelect.disabled = busy;
    this.$('performance-action-title').textContent = action?.title ?? '让肩、肘、腕一起配合';
    this.$('performance-action-detail').textContent = action?.description ?? '从菜单选一个动作，再点左边的空步骤继续添加。';
    this.$('performance-action-chain').textContent = action ? this.chainLabel(action.links) : '单步预览自然收回 · 连续演出结束才收回';
    this.taskButtons.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.task === game.task.id)); button.disabled = busy; });
    this.stepButtons.forEach((button, index) => {
      button.hidden = index >= game.task.slots; button.disabled = busy || index > game.steps.length;
      button.setAttribute('aria-pressed', String(!busy && index === game.selected));
      const title = game.steps[index] ? performanceAction(game.steps[index]).title : '＋ 添加动作';
      button.querySelector('b')!.textContent = title;
      button.setAttribute('aria-label', '第 ' + (index + 1) + ' 步：' + title);
      if (!busy) button.dataset.playing = 'false';
    });
    for (const tempo of ['calm', 'lively'] as const) {
      const button = this.$('performance-tempo-' + tempo) as HTMLButtonElement;
      button.setAttribute('aria-pressed', String(game.tempo === tempo)); button.disabled = busy;
    }
    (this.$('performance-step-up') as HTMLButtonElement).disabled = busy || !action || game.selected === 0;
    (this.$('performance-step-down') as HTMLButtonElement).disabled = busy || !action || game.selected >= game.steps.length - 1;
    (this.$('performance-step-remove') as HTMLButtonElement).disabled = busy || !action;
    (this.$('performance-preview') as HTMLButtonElement).disabled = busy || !action;
    const play = this.$('performance-play') as HTMLButtonElement;
    play.disabled = !game.canPlay; play.hidden = busy; play.textContent = result ? '再演一遍 ↗' : '播放整套表演 ↗';
    const pause = this.$('performance-pause') as HTMLButtonElement;
    pause.hidden = !busy; pause.textContent = game.status === 'paused' ? '继续表演' : '暂停';
    this.$('performance-stop').hidden = !busy;
    if (!busy) {
      this.lastPlayback = ''; this.playbackStep = null; this.progress.value = result ? 100 : 0;
      this.$('performance-now-label').textContent = result ? '演出完成 / 换个顺序再试试' : '03 / ' + (game.canPlay ? '准备开演' : '还差 ' + (game.task.slots - game.steps.length) + ' 步');
    }
    this.$('performance-status').textContent = result ? result.advice
      : busy ? game.status === 'paused' ? '已暂停，点击继续从当前姿态接着演。' : game.status === 'preview' ? '留意整条运动链怎样配合，预览结束后会自然收回。' : '动作之间直接衔接，整套结束统一收回。拖空白处仍可旋转视角。'
      : action ? game.canPlay ? '动作已排好！可以先预览单步，或让 G1 完成整套表演。' : '第 ' + (game.selected + 1) + ' 步已选好，点击左边下一个空步骤继续。'
      : '点选一个步骤，再从动作菜单挑选。每一步都由你决定。';
    this.$('performance-result').hidden = !result;
    this.$('performance-score-wrap').hidden = !result || result.score === null;
    this.$('performance-score').textContent = result?.score == null ? '—' : String(result.score);
    this.$('performance-result-title').textContent = result?.title ?? '';
    this.$('performance-stars').textContent = result ? '★'.repeat(result.stars) + '☆'.repeat(3 - result.stars) : '☆☆☆';
    this.$('performance-stars').setAttribute('aria-label', '获得 ' + (result?.stars ?? 0) + ' 颗任务星星');
  }
  private chainLabel(links: readonly string[]): string {
    const labels: string[] = [];
    if (links.some(link => link.startsWith('left_') && /shoulder|elbow|wrist/.test(link))) labels.push('左臂');
    if (links.some(link => link.startsWith('right_') && /shoulder|elbow|wrist/.test(link))) labels.push('右臂');
    if (links.some(link => link.startsWith('left_') && /hip|knee|ankle/.test(link))) labels.push('左腿');
    if (links.some(link => link.startsWith('right_') && /hip|knee|ankle/.test(link))) labels.push('右腿');
    if (links.includes('torso_link')) labels.push('腰部');
    return '运动链 / ' + labels.join(' + ');
  }
  dispose(): void { for (const remove of this.events) remove(); }
}
