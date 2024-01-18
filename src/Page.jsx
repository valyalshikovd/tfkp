import React, {useEffect, useState} from "react";
import Question from "./Question";
import Button from "@mui/material/Button";

const Page = (props) => {
    const {mode} = props;
    const [questions, setQuestions] = useState(null);
    const [objectEntries, setObjectEntries] = useState(null)
    const [key, setKey] = useState(null)
    const [hidePhoto, setHidePhoto] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(props.mode + " режим")
                let response = null;
                if(props.mode === 1){
                   response = await fetch(process.env.PUBLIC_URL + '/questions/questions3.json')
                }
                if(props.mode === 2){
                    response = await fetch(process.env.PUBLIC_URL + '/questions/questions4.json')
                }
                if(props.mode === 3){
                    response = await fetch(process.env.PUBLIC_URL + '/questions/questions3.json')
                    const data1 = await response.json();
                    response = await fetch(process.env.PUBLIC_URL + '/questions/questions4.json')
                    const data2 = await response.json();
                    const mergedObject = { ...data1, ...data2 };
                    setObjectEntries(Object.entries(mergedObject))
                    return
                }
                const data = await response.json();
                setObjectEntries(data)
                console.log('читает')
            } catch (error) {
                console.error('Ошибка при загрузке файла JSON:', error);
            }
        };
        fetchData();
    }, []);

    function getKey() {
        const keys = Object.keys(objectEntries);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setKey(randomKey);
        console.log(typeof  objectEntries[key])
        setHidePhoto(false)
    }
    return (
        <div>
            <div>
                {objectEntries != null ? <div>
                    {key}
                    {!hidePhoto ?
                        <div>
                            <Button onClick={() => setHidePhoto(true)}>Показать ответ</Button>
                        </div> :
                         <Question photoPath={objectEntries[key]} altText="Описание фотографии"/>
                    }
                </div> : <div>
                </div>}
                <Button onClick={() => getKey()}>Следующий</Button>

            </div>
        </div>
    );
};
export default Page;