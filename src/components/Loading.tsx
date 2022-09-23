import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
    return (
        <div className="d-flex justify-content-center mt-3">
            <FontAwesomeIcon className="text-gray" icon={faSpinner} spin={true} size={"6x"}/>
        </div>
    )
}