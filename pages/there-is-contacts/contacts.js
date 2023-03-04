import React, { useState } from "react";
import styles from "../../style/contacts.module.css";
import Greetings from "../../components/Greetings";

const Contacts = () => {
	const [animationPlay, setAnimationPlay] = useState(true);

	const changeAnimation = setTimeout(() => {
		setAnimationPlay(false);
		clearTimeout(changeAnimation);
	}, 3500);

	return (
		<div className={styles.container}>
			{/* <div className={`notSelected ${styles.textContainer} ${animationPlay ? styles.open : styles.close}`}>
				<span className={`notSelected ${styles.rectangleText} ${animationPlay ? styles.open : styles.close}`}>
					Hello There!
				</span>
      </div> */}
      
      <Greetings />
      
      <div className={styles.background} />

      <div className={`${styles["contact"]}`}>
				{/* mailto:mdava3776@gmail.com?subject={your-subject}&body=body */}
				<div className={`${styles["contact-mail-message"]}`}>
					<form
						action={"mailto:mdava3776@gmail.com?"}
						method="GET"
						encType={"text/plain"}
					>
						<p>
							<label>
								email
								<br />
								<input
									type="email"
									required={true}
									placeholder={"hiyo_ganteng@gmail.com"}
									name={"from"}
									minLength={5}
									size={40}
								/>
							</label>
						</p>
						<p>
							<label>
								subjek pertanyaan
								<br />
								<input
									type="text"
									required={false}
									placeholder={"siapa sih hiyo ini??"}
									name={"subject"}
									minLength={5}
									maxLength={250}
									size={40}
								/>
							</label>
						</p>
						<p>
							<label>
								Pesan atau pertanyaan
								<br />
								<textarea
									name="body"
									cols={100}
									rows={10}
									maxLength={1080}
									autoComplete={"true"}
									autoCapitalize={"true"}
									placeholder={
										"SUMPAH HIYO NIH SIAPA DARITADI DI SEBUT MULU LOH"
									}
								/>
							</label>
						</p>
						<button>
							<div className={`${styles["contact-svg-wrapper-1"]}`}>
								<div className={`${styles["contact-svg-wrapper"]}`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
									>
										<path fill="none" d="M0 0h24v24H0z"></path>
										<path
											fill="currentColor"
											d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
										></path>
									</svg>
								</div>
							</div>
							<span>Send</span>
						</button>
					</form>
				</div>
      </div>
      
      <div className={styles["another-social-media"]}>
        
      </div>
		</div>
	);
};

export default Contacts;
