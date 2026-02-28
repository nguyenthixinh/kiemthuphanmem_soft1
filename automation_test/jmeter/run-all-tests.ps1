# JMeter Automated Test Runner
# This script runs all 3 Thread Groups and generates reports

$JMETER_HOME = "D:\App_Data\jmeter\apache-jmeter-5.6.3"
$JMETER_BIN = "$JMETER_HOME\bin\jmeter.bat"
$TEST_PLAN = "D:\Code_Projects\School\Courses\KiemThu\KiemThuPhanMem\automation_test\jmeter\reddit-performance-test.jmx"
$RESULTS_DIR = "D:\Code_Projects\School\Courses\KiemThu\KiemThuPhanMem\automation_test\jmeter\results"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "JMeter Performance Test Automation" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""


# Ensure results directory exists
if (!(Test-Path $RESULTS_DIR)) {
    New-Item -ItemType Directory -Path $RESULTS_DIR -Force | Out-Null
}

# Clean old results
Write-Host "Cleaning old results..." -ForegroundColor Yellow
Remove-Item "$RESULTS_DIR\*.jtl" -ErrorAction SilentlyContinue
Remove-Item "$RESULTS_DIR\*.csv" -ErrorAction SilentlyContinue
Remove-Item "$RESULTS_DIR\html-report" -Recurse -ErrorAction SilentlyContinue

Write-Host "Starting JMeter tests..." -ForegroundColor Green
Write-Host ""

# Run all tests (non-GUI mode)
Write-Host "[1/1] Running All Thread Groups..." -ForegroundColor Cyan
Write-Host "This will take approximately 2-3 minutes..." -ForegroundColor Yellow

$resultFile = "$RESULTS_DIR\all-results.jtl"
$htmlReport = "$RESULTS_DIR\html-report"

& $JMETER_BIN -n -t $TEST_PLAN -l $resultFile -e -o $htmlReport

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Tests Completed Successfully!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Results saved to:" -ForegroundColor Yellow
    Write-Host "  - JTL file: $resultFile" -ForegroundColor White
    Write-Host "  - HTML Report: $htmlReport\index.html" -ForegroundColor White
    Write-Host ""
    Write-Host "Opening HTML Report..." -ForegroundColor Cyan
    Start-Process "$htmlReport\index.html"
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "Tests Failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Review the HTML report that just opened" -ForegroundColor White
Write-Host "2. Copy metrics to REPORT_TEMPLATE.md" -ForegroundColor White
Write-Host "3. Take screenshots if needed" -ForegroundColor White
Write-Host ""
