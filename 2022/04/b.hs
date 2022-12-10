import Data.List.Split
import Data.List

isInRange :: String -> Bool
isInRange xs = 
  let [left, right] = splitOn "," xs
      [[ll, lh], [rl, rh]] :: [[Int]] = map (map read . splitOn "-") [left, right]
      [firstList, secondList] = [[ll..lh], [rl..rh]]
  in not . null . intersect firstList $ secondList

main :: IO ()
main = do
  inputs <- lines <$> getContents
  print . length . filter isInRange $ inputs
