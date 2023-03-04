import { useEffect, useRef, useState } from "react";


import ImgPreviewer from "../components/ImgPreviewer.js";

import imageList from "../public/imagelist.json";

import home from "../style/home.module.css";
import CustomHead from "../components/CustomHead.js";
import Image from "next/image.js";
import Greetings from "../components/Greetings.js";

const HomePage = () => {
    const [openCloseOne, setOpenCloseOne] = useState(true);
    const [openCloseTwo, setOpenCloseTwo] = useState(false);
    const [openCloseThree, setOpenCloseThree] = useState(false);
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const container = useRef(null);

    let [numHandler, setNumHandler] = useState(1);

    useEffect(() => {
        const element_one = one.current;
        const element_two = two.current;
        const element_three = three.current;

        setInterval(() => {
            let timeout;

            if (element_one?.className.includes("close") || element_two?.className.includes("close") || element_three?.className.includes("close")) {
                timeout = 5500;
            }

            if (timeout) {
                setTimeout(() => {
                    setNumHandler((prev) => (prev + 1) % 3);
                }, timeout);
            } else {
                setNumHandler((prev) => (prev + 1) % 3);
            }
        }, 6000);
    }, []);

    useEffect(() => {
        switch (numHandler) {
            case 3:
                setOpenCloseOne(false);
                setOpenCloseTwo(false);
                setOpenCloseThree(true);
                break;
            case 2:
                setOpenCloseOne(false);
                setOpenCloseTwo(true);
                setOpenCloseThree(false);
                break;
            default:
                setOpenCloseOne(true);
                setOpenCloseTwo(false);
                setOpenCloseThree(false);
                break;
        }
    }, [numHandler]);


    useEffect(() => {
        switch (numHandler) {
            case 3:
                setOpenCloseOne(false);
                setOpenCloseTwo(false);
                setOpenCloseThree(true);
                break;
            case 2:
                setOpenCloseOne(false);
                setOpenCloseTwo(true);
                setOpenCloseThree(false);
                break;
            default:
                setOpenCloseOne(true);
                setOpenCloseTwo(false);
                setOpenCloseThree(false);
                break;
        }
    }, [numHandler]);

    return (
        <>

            {/* Ini adalah intro dari home yang kalian liat mutar mutar gak jelas dan ini adalah
          tempat dimana kalian bisa mengubah kata kata itu jadi sesuka kalian tapi ada
          yang gak bisa kalian ubah yaitu button jika kalian ubah button atau menambahkan
          button kalian harus merubah stylingnya lagi dan kalo bisa mengikuti style yang
          sudah saya buat gitu aja makasih, saya tau kalian tidak akan baca ini semua jadi
          selamat ber-eksperiment :)
      */}

            <CustomHead />
            <Greetings message={"Welcome!"}/>
            <div ref={container} className={`${home['home-title-container']} notSelected`}>
                <div className={`${home['home-text']} notSelected ${home.one}`}>
                    <h2 className={`${openCloseOne ? home.open : home.close} ${home.one}`}>
                        Tetap yang terbaik
                    </h2>
                    <h1 className={`${openCloseOne ? home.open : home.close} ${home.two}`}>
                        OFFICIAL WEBSITE <br /> SMA NEGERI 1 BANTAENG
                    </h1>
                    <p ref={one} className={`${openCloseOne ? home.open : home.close} ${home.three}`}>
                        SMA negeri (SMAN) 1 bantaeng, <br />
                        merupakan salah satu sekolah menengah atas <br /> negeri yang ada di
                        sulawesi selatan, indonesia
                    </p>
                </div>

                <div className={`${home['home-text']} notSelected ${home.two}`}>
                    <h2 className={`${openCloseTwo ? home.open : home.close} ${home.one}`}>
                        SMA Negeri 1 Bantaeng
                    </h2>
                    <h1 className={`${openCloseTwo ? home.open : home.close} ${home.two}`}>
                        TENAGA PENDIDIK PROFESIONAL
                    </h1>
                    <p className={`${openCloseTwo ? home.open : home.close} ${home.three}`}>
                        Kami bukan yang terbaik dalam segala <br /> hal tapi kami selalu
                        siap mengabdi sebagai tenaga <br /> pendidik dan pengajar yang
                        profesional untuk anak -anak bangsa Indonesia.
                    </p>

                    {/* ini adalah maksud button di atas */}
                    <button
                        ref={two}
                        className={`${openCloseTwo ? home.open : home.close} ${home.button}`}
                        onClick={() =>
                            window.open(
                                "https://api.whatsapp.com/send?phone=6285343600536&text=Hi,%20Admin%20SMA%20Negeri%201%20Bantaeng!%20Saya%20ingin%20berkonsultasi.",
                                "self",
                            )
                        }
                    >
                        Contact us
                    </button>
                </div>

                <div className={`${home['home-text']} notSelected ${home.three}`} >
                    <h2 className={`${openCloseThree ? home.open : home.close} ${home.one}`}>
                        tetap yang terbaik
                    </h2>
                    <h1 className={`${openCloseThree ? home.open : home.close} ${home.two}`}>
                        SEJAK TAHUN 1960 <br /> SMAN 1 BANTAENG
                    </h1>
                    <p
                        ref={three}
                        className={`${openCloseThree ? home.open : home.close} ${home.three}`}
                    >
                        sejak tahun 1960 SMA negeri 1 bantaeng <br /> sudah terpercaya
                        menghasilkan alumni - alumni <br />
                        terbaik dari berbagai profesi
                    </p>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/*
          ini adalah contact page atau yang bisa kalian tebak adalah tombol di bawah intro tadi :V
          di bagian ini simple sama seperti di atas kalian hanya perlu mengganti textnya jika perlu
          mengganti warna mengganti stylenya jika perlu tapi saya sarankan jangan buka css nya
          saya yakin anda pasti pusing ketika melihat isinya jadi saya sarankan jangan yang deh di buka
      */}
            <div className={`${home['home-contact-page']} notSelected`}>
                <h3>– TETAP YANG TERBAIK –</h3>
                <h1>SMA NEGERI 1 BANTAENG</h1>

                <div>
                    <p>
                        Sejak tahun 2012 SMA Negeri 1 Bantaeng merupakan pioner sekolah
                        tingkat SMA / MA di Kabupaten Bantaeng yang ditunjuk langsung oleh
                        Dinas Pendidikan Sulawesi Selatan sebagai Sekolah Model Pengembangan
                        Pengarustamaan Gender.
                    </p>
                </div>

                <button
                    ref={two}
                    className={`${home.button}`}
                    onClick={() =>
                        setTimeout(() => {
                            window.open(
                                "https://api.whatsapp.com/send?phone=6285343600536&text=Hi,%20Admin%20SMA%20Negeri%201%20Bantaeng!%20Saya%20ingin%20berkonsultasi.",
                                "self",
                            );
                        }, 500)
                    }
                >
                    Contact us
                </button>
            </div>

            {/* text is ONGOING. . . . . . . . . . . . */}

            {/* TODO: MAKE NEW PAGE FOR "DANA BOS" ALSO "BUKU TAMU" AND CHANGE THEM TO LINK FOR SOME CLICK
                and change the logo for "BUKU TAMU"
      */}
            <div className={`${home['home-navbar']} notSelected`}>
                <ul>
                    <li>
                        <Image
                            src={imageList.icon.danaBos} alt="Hello"
                            width={100}
                            height={100}
                        />
                        <p>Dana bos</p>
                    </li>

                    <li>
                        <Image width={100}
                            height={100}
                            src={imageList.icon.bukuTamu} alt="Hello"
                        />
                        <p>Buku Tamu</p>
                    </li>

                    {/* <li>
            <div className={`${home['image-example']}`}>example image 3</div>
            <p>Heaven</p>
          </li> */}

                    {/* <li>
            <div className={`${home['image-example']}`}>example image 3</div>
            <p>testElement</p>
          </li> */}
                </ul>
            </div>

            <div className={`${home['home-members-container']}`}>
                <h3>TENAGA PENGAJAR DAN PENDIDIK PROFESIONAL</h3>
                <h1>SMA NEGERI 1 BANTAENG</h1>
                <p>
                    Tenaga pengajar dan pendidik SMA Negeri 1 Bantaeng berkomitmen dan
                    selalu siap membina dan mengarahkan para siswa / siswi untuk menjadi
                    calon penerus bangsa Indonesia yang bermanfaat dan berbudi pekerti
                    luhur.
                </p>
                {/* -------------------------------------------------------------------------- */}

                {/*
        NOTE: kalo gambarnya sudah ada tolong bagian div example
        di ganti jadi img dan stylenya agak di perbaikin di line 820
        nama file home.css

        if you want to add another members just copy the
        div start with members if you want

        TODO: CHANGE THE SOURCE OF THE IMAGE TO THE REAL IMAGE
        */}

                <div className={`${home['home-members']}`}>
                    <p>– PARA PETINGGI –</p>

                    <div className={`${home['home-members-parents']}`}>
                        {/* starts here */}
                        <div className={`${home['home-members-info-container']}`}>
                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image1}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. bapak kau 1</p>
                            </div>

                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image2}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. mamak kau 2</p>
                            </div>

                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image3}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. anak kau 3</p>
                            </div>
                        </div>
                        {/* end here */}

                        {/* starts here */}
                        <div className={`${home['home-members-info-container']}`}>
                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image4}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. nenek kau 4</p>
                            </div>

                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image5}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. kakek kau 5</p>
                            </div>

                            <div className={`${home['home-members-info']}`}>
                                <div className={`${home['image-example']}`}>
                                    <Image
                                        width={262}
                                        height={346}
                                        src={imageList.officials.image6}
                                        alt="Test bruh"
                                        draggable={"false"}
                                    />
                                </div>
                                <p>Jabatan anggota</p>
                                <p>nama ex. sepupu kau 6</p>
                            </div>
                        </div>
                        {/* end here */}
                    </div>
                </div>
            </div>

            <div className={`${home['home-school-facilites-container']}`}>
                <h3>WE ARE SMANSA BANTAENG</h3>
                <h1>
                    Fasilitas lengkap dan lingkungan nyaman untuk menunjang proses belajar
                    mengajar.
                </h1>
                <ul>
                    <li>Masjid</li>
                    <li>Perpustakaan</li>
                    <li>Laboratorium biologi</li>
                    <li>Laboratorium fisika</li>
                    <li>laboratorium kimia</li>
                    <li>laboratorium Komputer</li>
                    <li>laboratorium bahasa dan seni</li>
                    <li>Lapangan basket, futsal, volly, dan takraw</li>
                    <li>Dan lain sebagainya</li>
                </ul>
            </div>

            <div className={`${home['home-gallery-preview']}`}>
                <div className={`${home['home-gallery-text']}`}>
                    <h3>BERDIRI SEJAK TAHUN 1960</h3>
                    <h1>SMA NEGERI 1 BANTAENG</h1>
                    <p>
                        SMA Negeri 1 Bantaeng siap mendukung kegiatan para siswa / siswi
                        dalam mengembangkan minat dan potensi para peserta anak didik.
                    </p>
                </div>

                <div className={`${home['home-image-collections']}`}>
                    <ImgPreviewer ImageURL={imageList.imageCollections} maxShowing={25} />
                </div>
            </div>

            <div className={`${home['home-social-media']} notSelected`}>
                <h3>TETAP YANG TERBAIK</h3>
                <h1>SMA Negeri 1 Bantaeng Sekolah Rintisan Standar Nasional</h1>
                <p>
                    Menjadi SMA yang unggul, menghasilkan lulusan yang beriman dan
                    bertaqwa kepada Tuhan Yang Maha Esa, berbudi pekerti luhur, berwawasan
                    luas, serta meningkatkan daya saing sumber daya manusia menyambut era
                    industri 4.0.
                </p>

                <div>
                    <button
                        onClick={() => {
                            setTimeout(() => {
                                window.open(
                                    "https://www.facebook.com/sman1bantaeng.official",
                                    "self",
                                );
                            }, 400);
                        }}
                        draggable={"false"}
                    >
                        <Image
                            width={50}
                            height={50}
                            src={imageList.icon.facebook}
                            alt={"hiyo"}
                            draggable={"false"}
                        />{" "}
                        <br />
                        facebook
                    </button>

                    <button
                        onClick={() => {
                            setTimeout(() => {
                                window.open(
                                    "https://www.instagram.com/smansabantaeng/",
                                    "self",
                                );
                            }, 400);
                        }}
                        draggable={"false"}
                    >
                        <Image
                            width={50}
                            height={50}
                            src={imageList.icon.instagram}
                            alt={"nih"}
                            draggable={"false"}
                        />{" "}
                        <br />
                        instagram
                    </button>

                    <button
                        onClick={() => {
                            setTimeout(() => {
                                window.open(
                                    "https://www.youtube.com/@smanegeri1bantaeng688",
                                    "self",
                                );
                            }, 400);
                        }}
                        draggable={"false"}
                    >
                        <Image
                            width={50}
                            height={50}
                            src={imageList.icon.youtube}
                            alt={"boss"}
                            draggable={"false"}
                        />{" "}
                        <br />
                        youtube
                    </button>

                    {/* <button>
            <img src={imageList.icon.twitter} alt={"senggol dong"} /> <br />
            twitter
          </button> */}
                </div>
            </div>

            {/* contacts */}
            <div className={`${home['home-contact']}`}>
                <h3>PERTANYAAN, SARAN, DAN KRITIK</h3>
                <h1>SMA NEGERI 1 BANTAENG</h1>
                <p>
                    Jika ada pertanyaan lebih lanjut mengenai SMA Negeri 1 Bantaeng,
                    kalian bisa hubungi kami lewat whatsapp atau kalian bisa lewat form di
                    bawah ini yang akan mengirim pesan kalian langsung ke akun smansa dan
                    silahkan tunggu balasan kami
                </p>

                {/* mailto:mdava3776@gmail.com?subject={your-subject}&body=body */}
                <div className={`${home['home-mail-message']}`}>
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
                                    maxLength={250}
                                    autoComplete={"true"}
                                    autoCapitalize={"true"}
                                    placeholder={
                                        "SUMPAH HIYO NIH SIAPA DARITADI DI SEBUT MULU LOH"
                                    }
                                />
                            </label>
                        </p>
                        <button>
                            <div className={`${home['home-svg-wrapper-1']}`}>
                                <div className={`${home['home-svg-wrapper']}`}>
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
        </>
    );
};

export default HomePage;
