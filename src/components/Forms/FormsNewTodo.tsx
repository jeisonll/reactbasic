import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {Todo} from "../TodoItem";
import {useContext} from "react";
import {TodoContext} from "../todoContext";

interface Iprops{
    todos:Todo[];
    setTodos:(data:Todo[])=>void;
}
export default function FormsNewTodo() {
    const {saveItem:setTodos,item:todos}=useContext(TodoContext);
    const {handleSubmit, register} = useForm<Todo>();

    const onSubmit: SubmitHandler<Todo> = async (data) => {
        setTodos([...todos,data])
    }
    return (
        <form className="form" id="formNewTodo" onSubmit={handleSubmit(onSubmit)}>
            <section className="mb-4 ">
                <label className="form form-label">Description TODO</label>
                <input type="text" className="form-control" {...register("text")}/>
            </section>
            <section className="d-flex ">
                <label className="form-label ">TODO completed</label>
                <input type="checkbox" className="form-check mx-3" {...register("completed")}/>
            </section>

        </form>
    )
}