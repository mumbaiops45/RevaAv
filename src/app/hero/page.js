import React from 'react'

const page = () => {
    return (
        <div>
            <div
                className="
        -mt-14
        flex justify-center items-center
        relative h-[95vh]
        before:content-['']
        before:absolute before:inset-0
        before:bg-[url('/hero1.png')]
        before:bg-cover before:bg-center

        after:content-['']
        after:absolute after:inset-0
        after:bg-black/70
      "
            >

                <div className="relative z-10 flex flex-col gap-6 h-full w-full justify-center items-start p-[15%]">
                    <h1 className="font-bold text-4xl">
                        Audio • Visual • Lighting • Design • Installation • AMC Support
                    </h1>

                    <p>
                        Reya AV delivers professional LED wall solutions that enhance visual impact
                        and elevate customer experience across hospitality, corporate, and
                        entertainment spaces.
                    </p>

                    <button
                        className="btn-primary
            "
                    >
                        Send Enquiry
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page