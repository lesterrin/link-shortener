import {useContext, useState} from "react";
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from "../context/AuthContext";

const CreatePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp();
    const [link, setLink] = useState('');
    const pressHandler = async event => {
        if (event.key === 'Enter'){
            try{
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                });
                console.log(data);
            } catch (e) {

            }
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input id="link"
                           name="link"
                           type="text"
                           value={link}
                           onChange={e => setLink(e.target.value)}
                            onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Link</label>
                </div>
            </div>
        </div>
    )
}

export default CreatePage;
