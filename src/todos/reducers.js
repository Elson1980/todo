import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE } from "./actions";

const initialState = { isloading: false, data: [] };

export const todos = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                state: state.data.concat(todo)
            };
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove }  = payload;
            return {
                ...state,
                data:  state.data.filter(todo => todo.id !== todoToRemove.id)
            };
        }
        case COMPLETE_TODO: {
            const { todo:  todoToUpdate } = payload;
            return {
                ...state,
                data:  state.data.map(todo => {
                    if (todo.id === todoToUpdate.id) {
                        return todoToUpdate;
                    }
                return todo;            
                })
            }
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            };
        }
        case LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isloading: true,
            }
        case LOAD_TODOS_FAILURE: 
            return {
                ...state,
                isloading: false
            }
        default:
            return state;
    }    
};