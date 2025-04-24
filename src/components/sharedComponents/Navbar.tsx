import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Select from "react-select"

type Inputs = {
    originalBookName: string
    originalWriterName: string
    interpreterWriterName: string
    writerNationality: { label: string; value: string } | null
    boughtOn: string
    bookHave: { label: string; value: string } | null
    bookReaded: { label: string; value: string } | null

}

const Navbar = () => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("originalBookName"))

    const writersNationality = [
        { value: 'afghanistan', label: 'Afghanistan' },
        { value: 'albania', label: 'Albania' },
        { value: 'algeria', label: 'Algeria' },
        { value: 'andorra', label: 'Andorra' },
        { value: 'angola', label: 'Angola' },
        { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
        { value: 'argentina', label: 'Argentina' },
        { value: 'armenia', label: 'Armenia' },
        { value: 'australia', label: 'Australia' },
        { value: 'austria', label: 'Austria' },
        { value: 'azerbaijan', label: 'Azerbaijan' },
        { value: 'bahamas', label: 'Bahamas' },
        { value: 'bahrain', label: 'Bahrain' },
        { value: 'bangladesh', label: 'Bangladesh' },
        { value: 'barbados', label: 'Barbados' },
        { value: 'belarus', label: 'Belarus' },
        { value: 'belgium', label: 'Belgium' },
        { value: 'belize', label: 'Belize' },
        { value: 'benin', label: 'Benin' },
        { value: 'bhutan', label: 'Bhutan' },
        { value: 'bolivia', label: 'Bolivia' },
        { value: 'bosnia-and-herzegovina', label: 'Bosnia and Herzegovina' },
        { value: 'botswana', label: 'Botswana' },
        { value: 'brazil', label: 'Brazil' },
        { value: 'brunei', label: 'Brunei' },
        { value: 'bulgaria', label: 'Bulgaria' },
        { value: 'burkina-faso', label: 'Burkina Faso' },
        { value: 'burundi', label: 'Burundi' },
        { value: 'cabo-verde', label: 'Cabo Verde' },
        { value: 'cambodia', label: 'Cambodia' },
        { value: 'cameroon', label: 'Cameroon' },
        { value: 'canada', label: 'Canada' },
        { value: 'central-african-republic', label: 'Central African Republic' },
        { value: 'chad', label: 'Chad' },
        { value: 'chile', label: 'Chile' },
        { value: 'china', label: 'China' },
        { value: 'colombia', label: 'Colombia' },
        { value: 'comoros', label: 'Comoros' },
        { value: 'congo-brazzaville', label: 'Congo (Brazzaville)' },
        { value: 'congo-kinshasa', label: 'Congo (Kinshasa)' },
        { value: 'costa-rica', label: 'Costa Rica' },
        { value: 'croatia', label: 'Croatia' },
        { value: 'cuba', label: 'Cuba' },
        { value: 'cyprus', label: 'Cyprus' },
        { value: 'czechia', label: 'Czechia' },
        { value: 'denmark', label: 'Denmark' },
        { value: 'djibouti', label: 'Djibouti' },
        { value: 'dominica', label: 'Dominica' },
        { value: 'dominican-republic', label: 'Dominican Republic' },
        { value: 'ecuador', label: 'Ecuador' },
        { value: 'egypt', label: 'Egypt' },
        { value: 'el-salvador', label: 'El Salvador' },
        { value: 'equatorial-guinea', label: 'Equatorial Guinea' },
        { value: 'eritrea', label: 'Eritrea' },
        { value: 'estonia', label: 'Estonia' },
        { value: 'eswatini', label: 'Eswatini' },
        { value: 'ethiopia', label: 'Ethiopia' },
        { value: 'fiji', label: 'Fiji' },
        { value: 'finland', label: 'Finland' },
        { value: 'france', label: 'France' },
        { value: 'gabon', label: 'Gabon' },
        { value: 'gambia', label: 'Gambia' },
        { value: 'georgia', label: 'Georgia' },
        { value: 'germany', label: 'Germany' },
        { value: 'ghana', label: 'Ghana' },
        { value: 'greece', label: 'Greece' },
        { value: 'grenada', label: 'Grenada' },
        { value: 'guatemala', label: 'Guatemala' },
        { value: 'guinea', label: 'Guinea' },
        { value: 'guinea-bissau', label: 'Guinea-Bissau' },
        { value: 'guyana', label: 'Guyana' },
        { value: 'haiti', label: 'Haiti' },
        { value: 'honduras', label: 'Honduras' },
        { value: 'hungary', label: 'Hungary' },
        { value: 'iceland', label: 'Iceland' },
        { value: 'india', label: 'India' },
        { value: 'indonesia', label: 'Indonesia' },
        { value: 'iran', label: 'Iran' },
        { value: 'iraq', label: 'Iraq' },
        { value: 'ireland', label: 'Ireland' },
        { value: 'israel', label: 'Israel' },
        { value: 'italy', label: 'Italy' },
        { value: 'jamaica', label: 'Jamaica' },
        { value: 'japan', label: 'Japan' },
        { value: 'jordan', label: 'Jordan' },
        { value: 'kazakhstan', label: 'Kazakhstan' },
        { value: 'kenya', label: 'Kenya' },
        { value: 'kiribati', label: 'Kiribati' },
        { value: 'korea-north', label: 'North Korea' },
        { value: 'korea-south', label: 'South Korea' },
        { value: 'kosovo', label: 'Kosovo' },
        { value: 'kuwait', label: 'Kuwait' },
        { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'laos', label: 'Laos' },
        { value: 'latvia', label: 'Latvia' },
        { value: 'lebanon', label: 'Lebanon' },
        { value: 'lesotho', label: 'Lesotho' },
        { value: 'liberia', label: 'Liberia' },
        { value: 'libya', label: 'Libya' },
        { value: 'liechtenstein', label: 'Liechtenstein' },
        { value: 'lithuania', label: 'Lithuania' },
        { value: 'luxembourg', label: 'Luxembourg' },
        { value: 'madagascar', label: 'Madagascar' },
        { value: 'malawi', label: 'Malawi' },
        { value: 'malaysia', label: 'Malaysia' },
        { value: 'maldives', label: 'Maldives' },
        { value: 'mali', label: 'Mali' },
        { value: 'malta', label: 'Malta' },
        { value: 'marshall-islands', label: 'Marshall Islands' },
        { value: 'mauritania', label: 'Mauritania' },
        { value: 'mauritius', label: 'Mauritius' },
        { value: 'mexico', label: 'Mexico' },
        { value: 'micronesia', label: 'Micronesia' },
        { value: 'moldova', label: 'Moldova' },
        { value: 'monaco', label: 'Monaco' },
        { value: 'mongolia', label: 'Mongolia' },
        { value: 'montenegro', label: 'Montenegro' },
        { value: 'morocco', label: 'Morocco' },
        { value: 'mozambique', label: 'Mozambique' },
        { value: 'myanmar', label: 'Myanmar' },
        { value: 'namibia', label: 'Namibia' },
        { value: 'nauru', label: 'Nauru' },
        { value: 'nepal', label: 'Nepal' },
        { value: 'netherlands', label: 'Netherlands' },
        { value: 'new-zealand', label: 'New Zealand' },
        { value: 'nicaragua', label: 'Nicaragua' },
        { value: 'niger', label: 'Niger' },
        { value: 'nigeria', label: 'Nigeria' },
        { value: 'north-macedonia', label: 'North Macedonia' },
        { value: 'norway', label: 'Norway' },
        { value: 'oman', label: 'Oman' },
        { value: 'pakistan', label: 'Pakistan' },
        { value: 'palau', label: 'Palau' },
        { value: 'panama', label: 'Panama' },
        { value: 'papua-new-guinea', label: 'Papua New Guinea' },
        { value: 'paraguay', label: 'Paraguay' },
        { value: 'peru', label: 'Peru' },
        { value: 'philippines', label: 'Philippines' },
        { value: 'poland', label: 'Poland' },
        { value: 'portugal', label: 'Portugal' },
        { value: 'qatar', label: 'Qatar' },
        { value: 'romania', label: 'Romania' },
        { value: 'russia', label: 'Russia' },
        { value: 'rwanda', label: 'Rwanda' },
        { value: 'saint-kitts-and-nevis', label: 'Saint Kitts and Nevis' },
        { value: 'saint-lucia', label: 'Saint Lucia' },
        { value: 'saint-vincent-and-the-grenadines', label: 'Saint Vincent and the Grenadines' },
        { value: 'samoa', label: 'Samoa' },
        { value: 'san-marino', label: 'San Marino' },
        { value: 'sao-tome-and-principe', label: 'Sao Tome and Principe' },
        { value: 'saudi-arabia', label: 'Saudi Arabia' },
        { value: 'senegal', label: 'Senegal' },
        { value: 'serbia', label: 'Serbia' },
        { value: 'seychelles', label: 'Seychelles' },
        { value: 'sierra-leone', label: 'Sierra Leone' },
        { value: 'singapore', label: 'Singapore' },
        { value: 'slovakia', label: 'Slovakia' },
        { value: 'slovenia', label: 'Slovenia' },
        { value: 'solomon-islands', label: 'Solomon Islands' },
        { value: 'somalia', label: 'Somalia' },
        { value: 'south-africa', label: 'South Africa' },
        { value: 'south-sudan', label: 'South Sudan' },
        { value: 'spain', label: 'Spain' },
        { value: 'sri-lanka', label: 'Sri Lanka' },
        { value: 'sudan', label: 'Sudan' },
        { value: 'suriname', label: 'Suriname' },
        { value: 'sweden', label: 'Sweden' },
        { value: 'switzerland', label: 'Switzerland' },
        { value: 'syria', label: 'Syria' },
        { value: 'taiwan', label: 'Taiwan' },
        { value: 'tajikistan', label: 'Tajikistan' },
        { value: 'tanzania', label: 'Tanzania' },
        { value: 'thailand', label: 'Thailand' },
        { value: 'timor-leste', label: 'Timor-Leste' },
        { value: 'togo', label: 'Togo' },
        { value: 'tonga', label: 'Tonga' },
        { value: 'trinidad-and-tobago', label: 'Trinidad and Tobago' },
        { value: 'tunisia', label: 'Tunisia' },
        { value: 'turkey', label: 'Turkey' },
        { value: 'turkmenistan', label: 'Turkmenistan' },
        { value: 'tuvalu', label: 'Tuvalu' },
        { value: 'uganda', label: 'Uganda' },
        { value: 'ukraine', label: 'Ukraine' },
        { value: 'united-arab-emirates', label: 'United Arab Emirates' },
        { value: 'united-kingdom', label: 'United Kingdom' },
        { value: 'united-states', label: 'United States' },
        { value: 'uruguay', label: 'Uruguay' },
        { value: 'uzbekistan', label: 'Uzbekistan' },
        { value: 'vanuatu', label: 'Vanuatu' },
        { value: 'vatican-city', label: 'Vatican City' },
        { value: 'venezuela', label: 'Venezuela' },
        { value: 'vietnam', label: 'Vietnam' },
        { value: 'yemen', label: 'Yemen' },
        { value: 'zambia', label: 'Zambia' },
        { value: 'zimbabwe', label: 'Zimbabwe' }
    ];
    const yesOrNo = [
        { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' },
    ]
    const navbar = (
        <>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/readed"}>Readed</NavLink></li>
            <li><NavLink to={"/wishToRead"}>Wish To Read</NavLink></li>
            <li><NavLink to={"/iHave"}>Books I Have</NavLink></li>
            <li><NavLink to={"/booksIWant"}>Books I Want</NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="button-style-01" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
                >Add Book</button>
            </div>




            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* MODAL */}
                    <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 ">

                            <div className="flex flex-col space-y-0.5">
                                <label className="underline" >Book Name (Original)</label>
                                <input className="input_field_01" placeholder="Original Book Name" {...register("originalBookName", { required: true })} />
                            </div>

                            <div className="flex flex-col space-y-0.5">
                                <label className="underline" >Writer Name</label>
                                <div className="flex flex-col space-y-2">
                                    {/* <label>Original</label> */}
                                    <input className="input_field_01" placeholder="Original Writer Name" {...register("originalWriterName", { required: true })} />
                                    {/* <label>Interpreter</label> */}
                                    <input className="input_field_01" placeholder="Interpreter Writer Name" {...register("interpreterWriterName")} />
                                    <Controller
                                        name="writerNationality"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderColor: state.isFocused ? 'grey' : 'rgb(255, 115, 0)',
                                                    }),
                                                }}
                                                {...field}
                                                options={writersNationality}
                                                placeholder="Select Original Writer nationality..."
                                                isClearable
                                                isSearchable
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Have the book & Readed the book */}
                            <div className="flex justify-between space-y-0.5">
                                <div className="">
                                    <label className="underline">Have the book?</label>
                                    <Controller
                                        name="bookHave"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderColor: state.isFocused ? 'grey' : 'rgb(255, 115, 0)',
                                                    }),
                                                }}
                                                {...field}
                                                options={yesOrNo}
                                                placeholder="Yes Or No"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="">
                                    <label className="underline">Readed the book?</label>
                                    <Controller
                                        name="bookReaded"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderColor: state.isFocused ? 'grey' : 'rgb(255, 115, 0)',
                                                    }),
                                                }}
                                                {...field}
                                                options={yesOrNo}
                                                placeholder="Yes Or No"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <label className="underline" >Buy on</label>
                                <input type="date" className="input_field_01" {...register("boughtOn")} />
                            </div>


                            {errors && <span>Field is required</span>}
                        </div>

                        <input className="" type="submit" />
                    </form>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Navbar;