/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_ThreadS action
 *  - should return the threads with the new thread when given by ADD_Thread action
 *  - should return the threads with the toggled like thread when given by TOGGLE_LIKE_Thread action
 *
 */

import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";

describe("threadReducers function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  // RECEIVE_THREADS
  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: "thread-2",
            title: "Thread Kedua",
            body: "Ini adalah thread kedua",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-2",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  // CREATE_THREAD
  it("should return the threads with the new thread when given by CREATE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "CREATE_THREAD",
      payload: {
        thread: {
          id: "thread-2",
          title: "Thread Kedua",
          body: "Ini adalah thread kedua",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          ownerId: "users-2",
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  // UP_VOTE_THREAD
  it("should return the threads with the up vote thread when given by UP_VOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "UP_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action: like thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // action: unlike thread
    const nextState2 = threadsReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  // DOWN_VOTE_THREAD
  it("should return the threads with the down vote thread when given by DOWN_VOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "DOWN_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action: like thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);

    // action: unlike thread
    const nextState2 = threadsReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  // NETURALIZE_VOTE_THREAD
  it("should return the threads with the neutralized vote thread when given by NETURALIZE_VOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: ["users-1"],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "NETURALIZE_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action: neutralize vote
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
