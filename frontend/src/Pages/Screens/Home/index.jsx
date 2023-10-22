import { MessageCard } from "../../components/MessageCard";
import { UploadFile } from "../../components/UploadFile";

import "./styles.css";

const Home = () => {
    return(
		<div className="home-container">
			<div className="upload-and-info-container">
				<UploadFile/>
				<div>
					<MessageCard/>
					<p>TEst</p>
					<p>TEst</p>
					<p>TEst</p>
					<p>TEst</p>
				</div>
			</div>

		</div>
    );
}
export { Home };