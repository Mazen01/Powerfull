import crunch from '../assets/excerciseVideos/crunch.mp4';
import highKnees from '../assets/excerciseVideos/highKnees.mp4';
import jumpingJack from '../assets/excerciseVideos/jumpingJack.mp4';
import lunge from '../assets/excerciseVideos/lunge.mp4';
import plank from '../assets/excerciseVideos/plank.mp4';
import plankLeft from '../assets/excerciseVideos/plankLeft.mp4';
import sidePlankRight from '../assets/excerciseVideos/sidePlankRight.mp4';
import pushupRotation from '../assets/excerciseVideos/pushupRotation.mp4';
import squat from '../assets/excerciseVideos/squat.mp4';
import pushup from '../assets/excerciseVideos/pushup.mp4';
import finished from '../assets/excerciseVideos/finished.mp4';

export const startText = "Get Ready";
export const finishedText = "Congrats! Workout complete!";

export const workoutTitle = {
    "3min":'Short, sweet, sweat',
    "5min":'Full body burner',
    "8min":'Daily intense workout',
}

export const workoutPlans = {
    '3min': [
                [startText, 3],
                ["Jumping Jacks", 30],
                ["Pushups", 30],
                ["Squats", 30],
                ["Plank", 30],
                ["Lunges Both Sides", 30],
                ["Pushup with Rotation", 30],
                [finishedText, 5],
            ],
    '5min': [
                [startText, 3],
                ["Jumping jacks",30],
                ["Rest",5],
                ["Pushups",30],
                ["Rest",5],
                ["Crunches",30],
                ["Rest",5],
                ["Squats",30],
                ["Rest",5],
                ["Plank",30],
                ["Rest",5],
                ["High knees",30],
                ["Rest",5],
                ["Lunges Both Sides",30],
                ["Rest",5],
                ["Pushup with Rotation",30],
                [finishedText, 5],
    ],
    '8min': [
                [startText, 3],
                ["Jumping Jacks", 30],
                ["Rest", 10],
                ["Pushups", 30],
                ["Rest", 10],
                ["Crunches", 30],
                ["Rest", 10],
                ["Squats", 30],
                ["Rest", 10],
                ["Plank", 30],
                ["Rest", 10],
                ["High knees", 30],
                ["Rest", 10],
                ["Lunge right", 30],
                ["Rest", 10],
                ["Lunges left", 30],
                ["Rest", 10],
                ["Pushup with rotation", 30],
                ["Rest", 10],
                ["Side plank left", 30],
                ["Rest", 10],
                ["Side plank right", 30],
                ["Rest", 10],
                ["Squats", 30],
                [finishedText, 5],
    ],
}

export const videoPerExercise = {
    "Jumping jacks":jumpingJack,
    "Pushups":pushup,
    "Crunches":crunch,
    "Squats":squat,
    "Plank":plank,
    "High knees": highKnees,
    "Lunges both sides": lunge,
    "Lunge right": lunge,
    "Lunges left": lunge,
    "Pushup with rotation": pushupRotation,
    "Side plank left": plankLeft,
    "Side plank right": sidePlankRight,
    [finishedText]: finished,
}