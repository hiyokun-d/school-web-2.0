import React, { useState } from "react";
import styles from "./contacts.module.css";
import Greetings from "../../components/Greetings";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import Navbar from "../../components/Navbar";

const Contacts = () => {


	/* 
		if you want to change the open animation the box
	   you can change it in css contacts and search for background class
	   then change the animation delay value
	*/

	return (
		<>
		<Navbar />
		<div className={styles.container}>
			<Greetings message={"Contact"} />


			<div className={styles.background} />

			<div className={`${styles["contact"]}`}>
				{/* mailto:mdava3776@gmail.com?subject={your-subject}&body=body */}
				<div className={`${styles["contact-mail-message"]}`}>
					<form
						action={"mailto:mdava3776@gmail.com?"}
						method="GET"
						encType={"text/plain"}
					>
						<div className={styles.inputDiv}>
							<label>
								email
							</label>
							<br />
							<input
								type="email"
								required={true}
								placeholder={"hiyo_ganteng@gmail.com"}
								name={"from"}
								minLength={5}
								size={40}
							/>
						</div>
						<div className={styles.inputDiv}>
							<label>
								subjek pertanyaan
								<br />
							</label>
							<input
								type="text"
								required={false}
								placeholder={"siapa sih hiyo ini??"}
								name={"subject"}
								minLength={5}
								maxLength={250}
								size={40}
							/>
						</div>
						<div className={styles.inputDiv}>
							<label>
								Pesan atau pertanyaan
								<br />
							</label>
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
						</div>
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
				<ul>
					<li>
						<a href="https://youtube.com/@smanegeri1bantaeng688">
							<YouTube fontSize="large" className={styles.youtube} />
						</a>
					</li>
					<li>
						<a href="https://instagram.com/smansabantaeng?igshid=MzRlODBiNWFlZA==">
							<Instagram fontSize="large" className={styles.instagram} />
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/sman1bantaeng.official">
							<Facebook fontSize="large" className={styles.facebook} />
						</a>
					</li>
				</ul>
			</div>
		</div>
		</>
	);
};

export default Contacts;
