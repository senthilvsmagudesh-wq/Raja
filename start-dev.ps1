<#
start-dev.ps1

Opens two PowerShell windows and starts the backend (uvicorn) and frontend (npm start).
Run this from the repository root in PowerShell: .\start-dev.ps1

#>

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $root 'backend'
$frontendPath = Join-Path $root 'frontend'

Write-Host "Starting backend in new PowerShell window (uvicorn)..."
Start-Process -FilePath 'powershell.exe' -ArgumentList "-NoExit","-Command","cd '$backendPath'; uvicorn server:app --reload --port 8000 --host 127.0.0.1"

Start-Sleep -Milliseconds 500

Write-Host "Starting frontend in new PowerShell window (npm start)..."
Start-Process -FilePath 'powershell.exe' -ArgumentList "-NoExit","-Command","cd '$frontendPath'; npm run start"

Write-Host "Launched backend and frontend. Check the new windows for logs."
