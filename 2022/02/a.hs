{-# OPTIONS_GHC -Wno-incomplete-patterns #-}
module Main where

data Shape = Rock | Paper | Scissors deriving (Show, Eq, Enum)
data Score = Loss | Tie | Win deriving (Show, Eq, Enum)

transformInput :: Char -> Shape
transformInput x
  | x `elem` "AX" = Rock
  | x `elem` "BY" = Paper
  | otherwise = Scissors

decide :: (Shape, Shape) -> Score
decide (Rock, Paper) = Win
decide (Paper, Rock) = Loss
decide (Rock, Scissors) = Loss
decide (Scissors, Rock) = Win
decide (Paper, Scissors) = Win
decide (Scissors, Paper) = Loss
decide _ = Tie

calcScore :: Score -> Int
calcScore = (*3) . fromEnum

calcShape :: Shape -> Int
calcShape = (+1) . fromEnum

process :: String -> Int
process [opp, _, me] =
  let
    inputs = (transformInput opp, transformInput me)
    score = decide inputs
    in calcScore score + calcShape (snd inputs)


main = do
  inputs <- mapM (const getLine) [1..2500]

  print . sum . map process $ inputs
