{-# OPTIONS_GHC -Wno-incomplete-patterns #-}
module Main where

data Shape = Rock | Paper | Scissors deriving (Show, Eq, Enum)
data Score = Loss | Tie | Win deriving (Show, Eq, Enum)

getShape :: Char -> Shape
getShape 'A' = Rock
getShape 'B' = Paper
getShape 'C' = Scissors

getScore :: Char -> Score
getScore 'X' = Loss
getScore 'Y' = Tie
getScore 'Z' = Win

calcScore :: Score -> Int
calcScore = (*3) . fromEnum

calcShape :: Shape -> Int
calcShape = (+1) . fromEnum

decide :: (Shape, Score) -> Shape
decide (Rock, Win) = Paper
decide (Rock, Loss) = Scissors
decide (Paper, Win) = Scissors
decide (Paper, Loss) = Rock
decide (Scissors, Win) = Rock
decide (Scissors, Loss) = Paper
decide (x, Tie) = x

process :: String -> Int
process [o, _, s] =
  let
    inputs = (getShape o, getScore s)
    myShape = decide inputs
    in calcScore (snd inputs) + calcShape myShape

main :: IO ()
main = do
  inputs <- mapM (const getLine) [1..2500]

  print . sum . map process $ inputs
