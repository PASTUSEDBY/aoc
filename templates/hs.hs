--Write ur own functions here

main :: IO ()
main = do
  inputs <- lines <$> getContents
  --do magical stuff with ur inputs
  mapM_ print inputs
