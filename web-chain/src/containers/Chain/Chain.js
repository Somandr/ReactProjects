import React, { Component } from 'react';
import classes from './Chain.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Chain extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'What is the color of sky?',
                rightAnswerId: 2,
                answers: [
                    { text: 'Black', id: 1 },
                    { text: 'Deep blue', id: 2 },
                    { text: 'Pink', id: 3 },
                    { text: 'Yellow', id: 4 },
                ],
            },
            {
                id: 2,
                question: 'What year did man visit the moon?',
                rightAnswerId: 1,
                answers: [
                    { text: 'On July 20, 1969', id: 1 },
                    { text: 'March, 1971', id: 2 },
                    { text: 'June, 1967', id: 3 },
                    { text: 'April, 1980', id: 4 },
                ],
            },
        ],
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'succes') {
                return;
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results,
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinshed()) {
                    this.setState({
                        isFinished: true,
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                    });
                }

                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[answerId] = 'error';
            this.setState({
                answerState: { [question.id]: 'error' },
                results,
            });
        }
    };

    isQuizFinshed() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {},
        });
    };

    render() {
        return (
            <div className={classes.Chain}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions?</h1>
                    {this.state.isFinished ? (
                        <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                    ) : (
                        <ActiveQuiz
                            answers={
                                this.state.quiz[this.state.activeQuestion]
                                    .answers
                            }
                            question={
                                this.state.quiz[this.state.activeQuestion]
                                    .question
                            }
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Chain;
