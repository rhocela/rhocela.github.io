# Add Git to PATH for this session
$env:Path = "C:\Program Files\Git\cmd;" + $env:Path

# Run git with all passed arguments
& git $args
