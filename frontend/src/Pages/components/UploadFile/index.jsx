import React from "react";
import { AppContext } from "../../../Context";

import { SubTitle } from "../SubTitle";

import { AiOutlineCloudUpload } from "react-icons/ai";

import "./styles.css";

const UploadFile = () => {
    const context = React.useContext(AppContext);

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);

	const [selectedFileName, setSelectedFileName] = React.useState(null);

    const handleFileChange = (event) => {
		context.setLoading(true);
        const file = event.target.files[0];

        if (file) {
            const allowedExtensions = ['.xlsx', '.csv'];
            const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

            if (allowedExtensions.includes(`.${fileExtension}`)) {
                setSelectedFile(file);
				setSelectedFileName(file.name)
            } else {
				context.errorMessageHandler("Por favor, seleccione un archivo .xlsx o .csv válido.")
            }
        }
		context.setLoading(false);
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
		context.setLoading(true);
		context.setData(null);
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
				switch (response.status) {
					case 400: context.messageHandler("error", data.message); break;
					case 500: context.messageHandler("error", data.message); break;
					case 200:
						context.messageHandler("all-ok", data.message);
						context.setData(data.rowLog);
						console.log(data.rowLog);
					break;
				}

            }
            catch (err) {
				context.messageHandler("error", err.message)
            }
        } else {
			context.messageHandler("error", "Por favor, seleccione un archivo o fuente válido antes de cargar.")
        }
		setSelectedOption(null);
		context.setLoading(false);
    };



    return(
        <form encType="multipart/form-data" onSubmit={handleFileUpload} className="form-container">
			<div className="inputs-container">
				<SubTitle
					color="#FFF"
					textAlign="start"
				>
					Porfavor seleccione un archivo
				</SubTitle>
				<label htmlFor="file" className="upload-file-container">
					<input
						id="file"
						type="file"
						accept=".xlsx, .csv"
						onChange={handleFileChange}
						name="file"
					/>
					<span>
						<AiOutlineCloudUpload/>
					</span>
					<div className="upload-file-info-container">
						<p>Subir Archivo</p>
						<p>{selectedFileName ?? "Archivos Excel (.xlsx) o CSV (.csx)"}</p>
					</div>

				</label>
			</div>


			<div className="inputs-container">
				<SubTitle
					color="#FFF"
					textAlign="start"
				>
					Porfavor seleccione una fuente
				</SubTitle>

				<select
					className="select-fuente-container"
					name="fuente"
					id="fuente"
					type="select"
					onChange={(event) => {
						setSelectedOption(event.target.value)
					}}
				>

					<option selected={selectedOption === null ? true : false } value={null}>Seleccione una fuente</option>
					{context.options?.map((item) => (
						<option
							key={item.id_fuente}
							value={item.id_fuente}
						>
							{item.nombre}
						</option>
					))}
				</select>
			</div>


			<button onClick={handleFileUpload}>Cargar Archivo</button>
        </form>

    );
}

export { UploadFile };