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
  inputs <- mapM (const getLine) [1..1000]
  print . length . filter isInRange $ inputs
