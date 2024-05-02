import React, { useState } from "react";
import {
    useDragAndDrop
} from "@formkit/drag-and-drop/react";

export function
    MyComponent() {
        const [val1,setVal1]=useState("");
    const [todoItems,setTodoItems]=useState(["Schedule perm", "Rewind VHS tapes", "Make change for the arcade", "Get disposable camera developed", "Learn C++", "Return Nintendo Power Glove"])
    const
        doneItems = ["Pickup new mix-tape from Beth"];

    const [
        todoList,
        todos] =
        useDragAndDrop<HTMLUListElement, string>(

            todoItems,
            {
                group: "doList",
                // sortable:false,
                longTouch:true,
                dragHandle: ".kanban-handle"


            }
        );
        console.log("This is ToDo",todos);
        console.log(todoList);
        
    const [
        doneList,
        dones] =
        useDragAndDrop<HTMLUListElement, string>(

            doneItems,
            {
                group: "doList",
            }
        );
    return (
        <
            div
            className="kanban-board">
            <
                ul
                ref={
                    todoList}>
                {
                    todos.
                        map((
                            todo) => (
                            <
                                li
                                className="kanban-item"
                                key={
                                    todo}>
                                {
                                    todo}
                            </
                            li>
                        ))}
            </
            ul>
            <div>-------------------------------</div>
            <
                ul
                ref={
                    doneList}>
                {
                    dones.
                        map((
                            done) => (
                            <
                                li
                                className="kanban-item"
                                key={
                                    done}>
                                {
                                    done}
                            </
                            li>
                        ))}
            </
            ul>
            <input placeholder="enter" value={val1} onChange={((e)=>{setVal1(e.target?.value);
            })}></input>
            <button onClick={(()=>{
                // console.log(todoItems);
                setTodoItems(prev=>[...prev,val1]);
                // console.log(todoItems);
            
            })}>save</button>
        </
        div>
    );
}