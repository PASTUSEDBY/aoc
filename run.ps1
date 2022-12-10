param (
  [Parameter(Mandatory=$true)][string]$day,
  [string]$type="js",
  [Int16]$year=(Get-Date).year
)

if ($day.Length -eq 1) {
  $day = "0$day";
}

$dir = "./$year/$day";

$names = @('a', 'b');

$runners = @{
  hs = "runhaskell";
  js = "node"
};

foreach ($name in $names) {
  $in = "$dir/in.txt";
  $file = "$dir/$name.$type";

  if (-not [System.IO.File]::Exists($file)) {
    continue;
  }

  $output = Get-Content $in | & $runners.$type $file
  $formatted = $output -join "`n"
  
  Write-Output "$name.$type = $formatted"
}
