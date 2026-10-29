$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
$destination = Join-Path $projectRoot 'demos/g1/source'
$commit = '15ebe53f4cd77e7d745ae83b9d7ff90e685e8998'
$headers = @{ 'User-Agent' = 'Robot-Exhibition-Demo' }
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$modelPath = 'robots/g1_description/g1_29dof_rev_1_0.urdf'
foreach ($entry in @($modelPath, 'LICENSE', 'robots/g1_description/README.md')) {
  $resource = Invoke-RestMethod -Uri "https://api.github.com/repos/unitreerobotics/unitree_ros/contents/${entry}?ref=$commit" -Headers $headers -TimeoutSec 45
  [IO.File]::WriteAllBytes((Join-Path $destination ([IO.Path]::GetFileName($entry))), [Convert]::FromBase64String($resource.content))
}
[xml]$model = Get-Content -LiteralPath (Join-Path $destination 'g1_29dof_rev_1_0.urdf') -Raw
$paths = @($model.SelectNodes('//mesh') | ForEach-Object { 'robots/g1_description/' + $_.filename } | Sort-Object -Unique)
$tree = Invoke-RestMethod -Uri "https://api.github.com/repos/unitreerobotics/unitree_ros/git/trees/${commit}?recursive=1" -Headers $headers -TimeoutSec 45
$entries = @($tree.tree | Where-Object { $_.path -cin $paths })
if ($entries.Count -ne $paths.Count) { throw 'Missing model assets in source repository' }
$meshDirectory = Join-Path $destination 'meshes'
New-Item -ItemType Directory -Path $meshDirectory -Force | Out-Null
$entries | ForEach-Object -Parallel {
  $entry = $_
  $target = Join-Path $using:meshDirectory ([IO.Path]::GetFileName($entry.path))
  if ((Test-Path -LiteralPath $target) -and (Get-Item -LiteralPath $target).Length -eq $entry.size) { return }
  $completed = $false
  for ($attempt = 0; $attempt -lt 3; $attempt++) {
    try {
      $blob = Invoke-RestMethod -Uri $entry.url -Headers @{ 'User-Agent' = 'Robot-Exhibition-Demo' } -TimeoutSec 60 -ErrorAction Stop
      $bytes = [Convert]::FromBase64String($blob.content)
      if ($bytes.Length -ne $entry.size) { throw 'Asset length mismatch' }
      [IO.File]::WriteAllBytes($target, $bytes)
      Write-Output ('Downloaded ' + [IO.Path]::GetFileName($entry.path))
      $completed = $true
      break
    } catch { if ($attempt -eq 2) { throw }; Start-Sleep -Seconds 2 }
  }
  if (!$completed) { throw ('Download failed: ' + $entry.path) }
} -ThrottleLimit 4
Write-Output ('Ready: ' + $entries.Count + ' official mesh files')
