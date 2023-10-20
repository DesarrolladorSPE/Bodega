import React from "react";
import "./styles.css";
import { AppContext } from "../../../Context";

const UploadFile = () => {
    const context = React.useContext(AppContext);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(1);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const allowedExtensions = ['.xlsx', '.csv'];
            const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

            if (allowedExtensions.includes(`.${fileExtension}`)) {
                setSelectedFile(file);
            } else {
                alert('Por favor, seleccione un archivo .xlsx o .csv válido.');
            }
        }
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
        if (selectedFile && selectedOption) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch( `${context.apiUri}/files/upload`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        "selectedOption": selectedOption,
                    }
                });
                const data = await response.json();
                alert(data.message)
            } 
            catch (error) {
                console.error(error);
            }
        } else {
            alert('Por favor, seleccione un archivo válido antes de cargar.');
        }
    };



    return(
        <form encType="multipart/form-data" onSubmit={handleFileUpload}>
            <div>
                <input
                    type="file"
                    accept=".xlsx, .csv"
                    onChange={handleFileChange}
                    name="file"
                />


                <select 
                    name="fuente" 
                    id="fuente"
                    type="select"
                    onChange={(event) => {
                        setSelectedOption(event.target.value)
                        console.log(selectedOption);
                    }}
                >
                    <option value="">Seleccione una opción</option>
                    {context.options?.map((item) => (
                        <option
                            key={item.id_fuente}
                            value={item.id_fuente}
                        >
                            {item.id_fuente}
                            {item.nombre}
                        </option>
                    ))}
                </select>

                <button onClick={handleFileUpload}>Cargar Archivo</button>

            </div>
        </form>

    );
}

export { UploadFile };