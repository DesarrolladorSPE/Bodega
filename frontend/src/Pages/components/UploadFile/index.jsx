import React from "react";
import { AppContext } from "../../../Context";

import { SubTitle } from "../SubTitle";

import { AiOutlineCloudUpload } from "react-icons/ai";

import "./styles.css";
import { OptionInputCard, UploadFileCard } from "../InputsCards";
import { validateFiles } from "../../../utils/validate/validateFiles";
import { handlePostFile } from "../../../utils/handleData/handlePostData";
import { handleNotifications } from "../../../utils/handleNotifications";
import { handleFileChange } from "../../../utils/handleFileChange";
import { handleInputChange } from "../../../utils/handleInputChange";

const UploadFile = () => {
    const context = React.useContext(AppContext);

	const [values, setValues] = React.useState({
        files: null,
        selectedOption: null,
    });

	const handleFileUpload = async (event) => {
        try {
            context.setLoading(true);

            event.preventDefault();

            validateFiles(values?.files, values?.selectedOption);

            const formData = new FormData();
            formData.append("selectedOption", values?.selectedOption)

            for (let i = 0; i < values.files.length; i++) {
                formData.append('file', values.files[i]);
            }

            const data = await handlePostFile(event, formData, "/files/upload");
			context.setData(data.rowLog);
        }
        catch (err) {
            return handleNotifications("error", err.message);
        } finally {
            context.setLoading(false);
        }
    };

    return(
        <form encType="multipart/form-data" onSubmit={handleFileUpload} className="form-container">
			<div className="inputs-container">
				<SubTitle
					color="#FFF"
					textAlign="start"
				>
					Por favor seleccione un archivo
				</SubTitle>

				<UploadFileCard
					id={"file"}
					onChange={(event) => handleFileChange(event, ['.xlsx', '.csv'], setValues)}

                    filesArray={values?.files}
				/>
			</div>


			<div className="inputs-container">
                <OptionInputCard
                    id={"fuente"}
                    label={"Seleccione una fuente"}
                    array={context.responseData?.fuentes}
                    onChange={(event) => {handleInputChange("selectedOption", event, setValues)}}
                    defaultValue={values?.selectedOption}
                    none={true}
                />
			</div>


			<button type="submit" title="Cargar archivo">Cargar Archivo</button>
        </form>

    );
}

export { UploadFile };