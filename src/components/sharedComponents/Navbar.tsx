import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Select from "react-select"
import { yesOrNo, writersNationality, bookConditions, bookGenres, bookOrigins } from '../../assets/selectOptions.ts'

type Inputs = {
    originalBookName: string
    originalWriterName: string
    interpreterWriterName: string
    publication: string
    boughtOn: string
    boughfrom: string
    receivedGiftFrom: string
    bookPrice: number
    writerNationality: { label: string; value: string } | null
    bookHave: { label: string; value: string } | null
    bookReaded: { label: string; value: string } | null
    bookGenre: { label: string; value: string } | null
    receivedAsGift: { label: string; value: string } | null
    bookCondition: { label: string; value: string } | null

}

const Navbar = () => {
    const {
        control,
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    const navbar = (
        <>
            <li id="navBarLink"><NavLink to={"/"}>Home</NavLink></li>
            <li id="navBarLink"><NavLink to={"/readed"}>Readed</NavLink></li>
            <li id="navBarLink"><NavLink to={"/wishToRead"}>Wish To Read</NavLink></li>
            <li id="navBarLink"><NavLink to={"/iHave"}>Books I Have</NavLink></li>
            <li id="navBarLink"><NavLink to={"/booksIWant"}>Books I Want</NavLink></li>
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
                        <div className="flex flex-col space-y-2.5 ">

                            {/* Book's */}
                            <div className="flex flex-col space-y-0.5">
                                <label className="underline text-lg font-semibold" >Book's Name (Original)</label>
                                <input className="input_field_01" placeholder="Original Book's Name" {...register("originalBookName", { required: true })} />
                            </div>

                            {/* Writer */}
                            <div className="flex flex-col space-y-0.5">
                                <label className="underline text-lg font-semibold" >Writer’s Name</label>
                                <div className="flex flex-col space-y-2">
                                    {/* <label>Original</label> */}
                                    <input className="input_field_01" placeholder="Original Writer's Name" {...register("originalWriterName", { required: true })} />
                                    {/* <label>Interpreter</label> */}
                                    <input className="input_field_01" placeholder="Interpreter Writer's Name" {...register("interpreterWriterName")} />
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
                                                placeholder="Select Original Writer's nationality..."
                                                isClearable
                                                isSearchable
                                                required
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Genre */}
                            <div className="flex flex-col space-y-0.5">
                                <label className="underline text-lg font-semibold">Genre</label>
                                <Controller
                                    name="bookGenre"
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
                                            required
                                            options={bookGenres}
                                            placeholder="Select Genre"
                                            isClearable
                                            isSearchable
                                        />
                                    )}
                                />

                            </div>

                            {/* Publication */}
                            <div className="flex flex-col space-y-0.5">
                                <label className="underline text-lg font-semibold">Publication</label>
                                <input className="input_field_01" placeholder="Publication Name" {...register("publication", { required: true })} />
                            </div>

                            {/* Book's Condition */}
                            <div className="">
                                <label className="underline text-lg font-semibold">Book's Condition</label>
                                <Controller
                                    name="bookCondition"
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
                                            options={bookConditions}
                                            placeholder="Select Book's Condition..."
                                            isClearable
                                            isSearchable
                                            required
                                        />
                                    )}
                                />
                            </div>

                            {/* Book's Origin */}
                            <div className="">
                                <label className="underline text-lg font-semibold">Book's Condition</label>
                                <Controller
                                    name="bookCondition"
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
                                            options={bookOrigins}
                                            placeholder="Select Book's Origin..."
                                            isClearable
                                            isSearchable
                                            required
                                        />
                                    )}
                                />
                            </div>

                            {/* Have the book & Readed the book */}
                            <div className="flex justify-between space-y-0.5">
                                <div className="">
                                    <label className="underline text-lg font-semibold">Have the book?</label>
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
                                                required
                                            />
                                        )}
                                    />
                                </div>
                                <div className="">
                                    <label className="underline text-lg font-semibold">Readed the book?</label>
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
                                                required
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Bought / Gift */}
                            <div className="">
                                {/* Bought */}
                                <div className="flex flex-col space-y-1">
                                    <label className="underline text-lg font-semibold" >Buying Details</label>
                                    <div className="space-x-1">
                                        <label className="">Bought on: </label>
                                        <input type="date" className="input_field_01" {...register("boughtOn")} />
                                    </div>
                                    <div className="space-x-1">
                                        <label className="">Bought from: </label>
                                        <input type="text" className="input_field_01" {...register("boughfrom")} />
                                    </div>
                                    <div className="space-x-1">
                                        <label className="">Price: </label>
                                        <input type="number" className="input_field_01" {...register("bookPrice")} />
                                    </div>

                                </div>
                                {/* Gift */}
                                <div className="">
                                    <label className="underline text-lg font-semibold">Received as a gift?</label>
                                    <div className="space-y-1">
                                        <Controller
                                            name="receivedAsGift"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    className="w-full"
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
                                        <input type="text" placeholder="Received Form.." className="input_field_01 w-full" {...register("receivedGiftFrom")} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-2">
                            <input className="button-style-01" type="submit" />
                        </div>
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