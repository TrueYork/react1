import profileReducer, {addPost, removePost} from "./profileReducer";

//data preparation
let state = {
    posts: [
        {id: 1, post: 'Hi, how are you', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 11}
    ]
};

test('posts array length is increased by 1', () => {
    let addPostAction = addPost("test msg");

    //action
    let newState = profileReducer(state, addPostAction);

    //expectation
    expect(newState.posts.length).toBe(3);
});

test('content of the added post is valid', () => {
    let addPostAction = addPost("test msg");

    //action
    let newState = profileReducer(state, addPostAction);

    //expectation
    expect(newState.posts[2].post).toBe("test msg");
});

test('new post id should be incremented by 1', () => {
    let addPostAction = addPost("test msg");


    //action
    let newState = profileReducer(state, addPostAction);

    //expectation
    expect(newState.posts[2].id).toBe(3);
});

test('after post removal posts array length should be decremented by 1', () => {
    let removePostAction = removePost(1);


    //action
    let newState = profileReducer(state, removePostAction);

    //expectation
    expect(newState.posts.length).toBe(1);
});

test('error case: delete non-existing post', () => {
    let removePostAction = removePost(1000);


    //action
    let newState = profileReducer(state, removePostAction);

    //expectation
    expect(newState.posts.length).toBe(2);
});