/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from "vitest";
import api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setIsPreloadActionCreator, asyncPreloadProcess } from "./action";
import { setAuthUserActionCreator } from "../authUser/action";

const fakeUsersResponse = [
  {
    id: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://generated-image-url.jpg",
  },
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncPreloadProcess thunk", () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    // delete backup data
    delete api._getOwnProfile;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeUsersResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // action
    await asyncPreloadProcess()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // action
    await asyncPreloadProcess()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
