import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Todo} from "./TodoItem";
import React, {useContext} from "react";
import {TodoContext} from "./todoContext";



interface Iprops{
    modal?:boolean;
    toggle?:()=>void;
    className:string;
    children:React.ReactElement;
    idFrom: string;
}



export default function ModalGeneric({children, className, idFrom}:Iprops){

    const {modal, setModal}=useContext(TodoContext);
    let toggle=() => setModal(!modal)
    return(
        <>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button form={idFrom} type="submit" color="primary" onClick={toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}