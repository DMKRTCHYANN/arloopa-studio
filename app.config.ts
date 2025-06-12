export default defineAppConfig({
    ui: {
        notifications: {
            position: 'top-0 bottom-[unset]'
        },
        button: {
            base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-100 disabled:bg-[#FFB8BF] disabled:text-[#FFDDE1] aria-disabled:cursor-not-allowed aria-disabled:opacity-100 flex-shrink-0',
            "padding": {
                "2xs": "px-2 py-1",
                "xs": "px-2.5 py-1.5",
                "sm": "px-2.5 py-1.5",
                "md": "px-10 py-3",
                "lg": "px-3.5 py-2.5",
                "xl": "px-3.5 py-2.5"
            },
            "rounded": "rounded-full",
            "color": {
                "red": {
                    "solid": "shadow-sm text-white disabled:text-[#FFDDE1] bg-red-600 hover:bg-red-700 disabled:bg-[#FFB8BF] dark:bg-gray-900 dark:hover:bg-gray-800/50",
                    "ghost": "text-gray-900 py-[28px] dark:text-white hover:bg-white dark:hover:bg-gray-900",
                    "green": "text-white max-w-[178px] text-xs font-roboto mr-3 w-full h-9 p-0 flex justify-center bg-[#36B37E] dark:text-green-800 hover:bg-green-500 sm:max-w-[178px] max-w-[130px]",
                    "white": "text-[#E60016] max-w-[193px] p-0 text-xs font-roboto w-full h-9 flex justify-center  bg-white border border-[#E60016] sm:max-w-[193px] max-w-[150px]",
                    "save-password": "py-[10px] px-[40px] rounded-full text-[14px] font-semibold text-white bg-[#E60017]",
                    "save": "flex py-[10px] px-[43px] justify-center rounded-full text-[14px] text-white bg-[#E60017]",
                    "cancel": "text-[#0747A6] py-[10px] px-[43px] text-[14px]",
                    "close": "text-gray-900 text-white absolute bg-gray-400 top-3 right-2 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-900",
                    "verifyemail": "shadow-sm rounded-3xl text-xs text-center p-0 px-10 py-2.5 flex justify-center  text-white bg-red-600 hover:bg-red-700 disabled:bg-red-600 dark:bg-gray-900 dark:hover:bg-gray-800/50",
                    "addnewcard": "shadow-sm rounded-3xl text-xs text-center p-0 px-10 py-2.5 mx-auto flex justify-center  text-white bg-red-600 hover:bg-red-700 disabled:bg-red-600 dark:bg-gray-900 dark:hover:bg-gray-800/50",
                    "defaultbtn": "bg-black ml-[12px] py-[3px] px-3 rounded font-roboto font-bold text-white",
                    "deleteacc": "bg-[#E60016] px-[43px] font-roboto py-[10px] text-white",
                    "create-popup": "bg-[#E60016] px-[40px] font-roboto py-[10px] text-white",
                    "cancelactioon": "text-[#C9D0DC] border border-[#C9D0DC] px-[43px] py-[10px]",
                    "signout": "py-[7px] bg-[#F4F5F7] w-full text-center rounded-lg flex justify-center text-[#8A0815] font-roboto",
                    "owner": "px-[14px] py-1 bg-[#FFDDE1] text-[#E60016] font-roboto sm:text-xs text-[10px]",
                    "pending": "px-[14px] py-[7px] bg-[#DEEBFF] mr-3.5",
                    "home-discover": "px-11 leading-[1] py-2 font-medium text-base bg-[#c73e9b] text-white rounded-3xl",
                    "core-features": "py-4 leading-[1] border border-[#1d293f] font-medium text-base rounded-3xl",
                },
            },
            "variant": {
                "solid": '',
                "my": "w-full max-w-[237px] rounded-[24px] bg-white  border-[#AFB8C7] border-[1px] flex flex-row justify-center items-center text-[#AFB8C7]",
                "auth": "w-full rounded-full bg-[#E60016] flex justify-center py-[16px] text-[#FFF] font-medium text-[16px] ",
                "forgot": "w-full rounded-[24px] bg-white border-[#AFB8C7] border-[1px] text-[#AFB8C7] py-[10px] font-roboto text-[14px] not-italic font-semibold leading-5",
                "forgot-red": "w-full rounded-[24px] bg-red-600 py-[10px] text-[#FFF] py-[10px] font-roboto text-[14px] not-italic font-semibold leading-5",
                "dropdown": "w-full font-roboto text-[16px] not-italic font-normal leading-6 bg-[#F4F5F7] rounded-[12px]",
                "convert-industries": "max-w-[411px] mt-6 w-full flex justify-center rounded-3xl bg-[#E60016] text-white text-center",
                "video-select": "bg-[#FFF] focus:outline-none focus:ring focus:ring-[#DEEBFF] w-full rounded-[4px] max-w-[205px] h-[34px] p-0",
                "filter-analytics1": "max-w-64 w-full px-[16px] py-[6px] text-[14px] font-roboto bg-[#F4F5F7]",
                "filter-analytics2": "text-[13px] font-semibold",
                "faq": "text-gray-900 py-[28px]",
            },
            "default": {
                "size": "md",
                "variant": "solid",
                "color": "red",
                "loadingIcon": "i-heroicons-arrow-path-20-solid"
            }
        },
        toggle: {
            base: 'relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
            rounded: 'rounded-full',
            ring: 'ring-0',
            active: 'bg-[#EBECF0]',
            inactive: 'bg-[#EBECF0]',
            size: {
                '2xs': 'h-3 w-5',
                xs: 'h-3.5 w-6',
                sm: 'h-4 w-7',
                md: 'h-5 w-9',
                lg: 'h-6 w-11',
                xl: 'h-7 w-[3.25rem]',
                '2xl': 'h-8 w-[3.75rem]',
            },
            container: {
                base: 'pointer-events-none relative inline-block rounded-full bg-[#AFB8C7] shadow-none transform ring-0 transition ease-in-out duration-200',
                active: {
                    '2xs': 'translate-x-2 rtl:-translate-x-2',
                    xs: 'translate-x-2.5 rtl:-translate-x-2.5',
                    sm: 'translate-x-3 rtl:-translate-x-3',
                    md: 'translate-x-4 rtl:-translate-x-4',
                    lg: 'translate-x-5 rtl:-translate-x-5',
                    xl: 'translate-x-6 rtl:-translate-x-6',
                    '2xl': 'translate-x-7 rtl:-translate-x-7',
                },
                inactive: 'translate-x-0 rtl:-translate-x-0',
                size: {
                    '2xs': 'h-2 w-2',
                    xs: 'h-2.5 w-2.5',
                    sm: 'h-3 w-3',
                    md: 'h-4 w-4',
                    lg: 'h-5 w-5',
                    xl: 'h-6 w-6',
                    '2xl': 'h-7 w-7',
                },
            },
            icon: {
                base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                active: 'opacity-100 ease-in duration-200',
                inactive: 'opacity-0 ease-out duration-100',
                size: {
                    '2xs': 'h-2 w-2',
                    xs: 'h-2 w-2',
                    sm: 'h-2 w-2',
                    md: 'h-3 w-3',
                    lg: 'h-4 w-4',
                    xl: 'h-5 w-5',
                    '2xl': 'h-6 w-6',
                },
                on: 'text-{color}-500 dark:text-{color}-400',
                off: 'text-gray-400 dark:text-gray-500',
                loading: 'animate-spin text-{color}-500 dark:text-{color}-400',
            },
            default: {
                onIcon: null,
                offIcon: null,
                loadingIcon: 'i-heroicons-arrow-path-20-solid',
                color: 'primary',
                size: 'md',
            },
        },
        input: {
            "rounded": "rounded-full",
            "padding": {
                "2xs": "px-2 py-1",
                "xs": "px-2.5 py-1.5",
                "sm": "px-2.5 py-1.5",
                "md": "px-4  py-[8px]",
                "lg": "px-5 py-6",
                "xl": "px-6 py-7"
            },
            "color": {
                "white": {
                    "outline": "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#ff0000]"
                },
                "gray": {
                    "outline": "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#ff0000]"
                }
            },
            "variant": {
                "outline": "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
                "none": "bg-[#F4F5F7] focus:ring-0 focus:shadow-none rounded-[4px] placeholder-[#AFB8C7]  placeholder:font-roboto",
                "sketchfab-input": "bg-[#FFF] focus:ring-0 focus:shadow-none rounded-[12px] placeholder-[#AFB8C7] h-[56px] placeholder:font-roboto placeholder:text-[16px] placeholder:not-italic placeholder:leading-[24px]",
                "my": "text-gray-900 dark:text-white ring-[#F4F5F7] py-[16px]  focus:ring-2 focus:ring-[#dbdbdb] dark:focus:ring-[#F4F5F7] rounded-[12px] bg-[#F4F5F7] placeholder:text-[16px] not-italic font-roboto leading-6",
                "changepassword": "bg-[#F4F5F7] text-black rounded-[12px] w-full py-[19px] px-[24px]",
                "modal-input": "bg-[#EBECF0] text-black rounded-2xl w-full px-[16px] py-[16px] flex justify-between focus:ring-red-500 dark:focus:ring-red-400",
                "deleteacc": "bg-[#F4F5F7] text-black rounded-2xl relative py-[19px] pl-[24px] focus:ring-red-500 dark:focus:ring-red-400",
                "profile-popup": "bg-white text-black rounded-[12px] w-full py-[16px] px-[14px] border-transparent border-[2px] focus:border-[#0065FF]",
                "payment": "bg-[#EBECF0] text-black border-none rounded-[4px] w-full py-[8px] px-[16px]",
                "checkout": "bg-[#EBECF0] text-black border-none rounded-[12px] w-full py-[16px] px-[16px]",
                "auth": "bg-[#F4F5F7] text-black border-none rounded-[12px] w-full py-[16px] px-[16px]",
                "st-contact": "max-w-[380px] w-full p-4 w-full pl-5 border-none outline-none bg-white",
                "changename": "bg-[#EBECF0] text-black rounded-2xl w-full py-[19px] pl-[24px] h-14 flex justify-between p-4 focus: border ring-[#0065FF] dark:focus:ring-[#0065FF]",
                "st-question": "max-w-[850px] py-[20px] text-[#3a4a56] w-full mt-4 rounded-md border border-[#ccc]",
                "convert-industries": "relative max-w-[411px] w-full font-bold block mt-4 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-full text-[#9CA3AF] placeholder-gray-400 dark:placeholder-gray-500 text-sm p-4 w-full pl-5 border-none outline-none bg-[#F4F4F9]",
                "subscribe_now" : "max-w-[400px] py-[9px] w-full border border-gray-700"
            },
            "default": {
                "size": "md",
                "color": "white",
                "variant": "outline",
                "loadingIcon": "i-heroicons-arrow-path-20-solid"
            },

        },
        textarea: {
            variant: {
                question: 'max-w-[850px] mt-2 pl-4 h-[220px] w-full text-[#3a4a56] border border-[#ccc]',
                cancel: 'max-w-[850px] mt-2 pl-4 h-[96px] w-full text-[#3a4a56] border-none rounded-[10px]',
            },
        },
        select: {
            "wrapper": "relative",
            "base": "relative block disabled:opacity-75 focus:outline-none border-0",
            "rounded": "rounded-md",
            "placeholder": "text-gray-900 dark:text-white",
            "size": {
                "2xs": "text-xs",
                "xs": "text-xs",
                "sm": "text-sm",
                "md": "text-sm",
                "lg": "text-sm",
                "xl": "text-base"
            },
            "gap": {
                "2xs": "gap-x-1",
                "xs": "gap-x-1.5",
                "sm": "gap-x-1.5",
                "md": "gap-x-2",
                "lg": "gap-x-2.5",
                "xl": "gap-x-2.5"
            },
            "padding": {
                "2xs": "px-2 py-1",
                "xs": "px-2.5 py-1.5",
                "sm": "px-2.5 py-1.5",
                "md": "px-4 py-[8px]",
                "lg": "px-5 py-6",
                "xl": "px-6 py-7"
            },
            "leading": {
                "padding": {
                    "2xs": "ps-7",
                    "xs": "ps-8",
                    "sm": "ps-9",
                    "md": "ps-10",
                    "lg": "ps-11",
                    "xl": "ps-12"
                }
            },
            "trailing": {
                "padding": {
                    "2xs": "pe-7",
                    "xs": "pe-8",
                    "sm": "pe-9",
                    "md": "pe-10",
                    "lg": "pe-11",
                    "xl": "pe-12"
                }
            },
            "color": {
                "white": {
                    "outline": "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                },
                "gray": {
                    "outline": "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                }
            },
            "variant": {
                "outline": "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
                "none": "bg-transparent focus:ring-0 focus:shadow-none",
                "new": "rounded-[4px] bg-[#F4F5F7] focus:ring-0 focus:shadow-none text-[14px] font-roboto not-italic font-normal  text-[#AFB8C7]  leading-4",
                "label": "bg-transparent ring-0 text-[#000000] cursor-pointer text-[14px] font-semibold",
                "analytics": "bg-[#F4F5F7] text-black border-none ring-0 px-[16px] py-[8px] cursor-pointer"
            },
            "icon": {
                "base": "flex-shrink-0 text-black",
                "color": "text-{color}-500 dark:text-{color}-400",
                "size": {
                    "2xs": "h-4 w-4",
                    "xs": "h-4 w-4",
                    "sm": "h-5 w-5",
                    "md": "h-5 w-5",
                    "lg": "h-5 w-5",
                    "xl": "h-6 w-6"
                },
                "leading": {
                    "wrapper": "absolute inset-y-0 start-0 flex items-center",
                    "pointer": "pointer-events-none",
                    "padding": {
                        "2xs": "ps-2",
                        "xs": "ps-2.5",
                        "sm": "ps-2.5",
                        "md": "ps-3",
                        "lg": "ps-3.5",
                        "xl": "ps-3.5"
                    }
                },
                "trailing": {
                    "wrapper": "absolute inset-y-0 end-0 flex items-center",
                    "pointer": "pointer-events-none",
                    "padding": {
                        "2xs": "pe-2",
                        "xs": "pe-2.5",
                        "sm": "pe-2.5",
                        "md": "pe-3",
                        "lg": "pe-3.5",
                        "xl": "pe-3.5"
                    }
                }
            },
            "default": {
                "size": "md",
                "color": "white",
                "variant": "outline",
                "loadingIcon": "i-heroicons-arrow-path-20-solid",
                "trailingIcon": "i-heroicons-chevron-down-20-solid"
            }
        },
        "avatar": {
            "size": "xl"
        },
        popper: {
            "width": 'w-[3px]',
            "placement": "bottom-start",
            "strategy": "fixed"
        },
        dropdown: {
            // width: 'w-56',
            wrapper: 'relative inline-flex text-left rtl:text-right',
            item: {
                disabled: "opacity-100"
            },
            variant: {
                "large": {
                    width: '820px',
                }
            },
        },
        checkbox: {
            "rounded": "rounded-[36px]",
            'color': 'red'
        },
        uradiogroup:{
            "wrapper": "relative flex items-start",
        },
        // modal: {
        //     width: 'sm:max-w-xs'
        // },
        accordion: {
            item: {
                size: 'text-[14px]',
                color: 'text-gray-500 dark:text-gray-400',
                padding: "px-[40px]"
            }
        },
        modal: {
            width: 'w-full sm:max-w-[1200px]',
            overlay: {
                background: 'bg-gray-200/75 dark:bg-gray-800/75',
            },
            shadow: 'shadow-none',
            padding: 'p-4 sm:p-0',
        },
        card: {
            shadow: 'shadow-none',
            rounded: 'rounded-[12px]',
            body: {
                padding: 'p-0 sm:p-0',
            },
            header: {
                padding: 'p-0 sm:p-0',
            },
            footer: {
                padding: 'px-0 py-0',
            }
        },
        uiMenu: {
            container: 'z-20 group',
            trigger: 'flex items-center w-full',
            width: 'w-full',
            height: 'max-h-60',
            base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
            background: 'bg-white',
            shadow: 'shadow-none',
            rounded: 'rounded-[4px]',
            padding: 'px-[16px] py-[8px]',
            ring: 'ring-0 ring-gray-200 dark:ring-gray-700',
            empty: 'text-lg text-gray-400 dark:text-gray-500 px-2 py-1.5',
            option: {
                base: 'cursor-default select-none relative flex items-center justify-between gap-1',
                rounded: 'rounded-md',
                padding: 'px-1.5 py-1.5',
                size: 'text-sm',
                color: 'text-gray-900 dark:text-white',
                container: 'flex items-center gap-1.5 min-w-0',
                active: 'bg-gray-100 dark:bg-gray-900',
                inactive: '',
                selected: 'pe-7',
                disabled: 'cursor-not-allowed opacity-50',
                empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
                icon: {
                    base: 'flex-shrink-0 h-5 w-5',
                    active: 'text-gray-900 dark:text-white',
                    inactive: 'text-gray-400 dark:text-gray-500',
                },
                selectedIcon: {
                    wrapper: 'absolute inset-y-0 end-0 flex items-center',
                    padding: 'pe-2',
                    base: 'h-5 w-5 text-gray-900 dark:text-white flex-shrink-0',
                },
                avatar: {
                    base: 'flex-shrink-0',
                    size: '2xs',
                },
                chip: {
                    base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
                },
                create: 'block truncate',
            },
            transition: {
                leaveActiveClass: 'transition ease-in duration-100',
                leaveFromClass: 'opacity-100',
                leaveToClass: 'opacity-0',
            },
            popper: {
                placement: 'bottom-end',
            },
            default: {
                selectedIcon: 'i-heroicons-check-20-solid',
                clearSearchOnClose: false,
                showCreateOptionWhen: 'empty',
            },
            arrow: {
                base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
                ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-700',
                rounded: 'before:rounded-sm',
                background: 'before:bg-white dark:before:bg-gray-700',
                shadow: 'before:shadow',
                placement: "group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1",
            },
            select: 'inline-flex items-center text-left cursor-default',
            input: 'block w-[calc(100%+0.5rem)] focus:ring-transparent text-lg px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
            required: 'absolute inset-0 w-px opacity-0 cursor-default',
            label: 'block truncate',
        },
        skeleton: {
            base: 'animate-pulse',
            background: 'bg-gray-200',
            rounded: 'rounded-md',
        },
        tooltip : {
            wrapper: 'relative inline-flex mt-1',
            container: 'z-20 group',
            width: 'w-fit',
            background: 'bg-[#F9F9F9]',
            color: 'text-black',
            rounded: 'rounded-full',
            ring: 'ring-0',
            base: '[@media(pointer:coarse)]:hidden h-auto font-medium w-full px-2 px-4 text-sm font-normal truncate relative',
            shortcuts: 'hidden flex-shrink-0 gap-0.5',
            middot: 'mx-1 px-8',
            arrow: {
                base: '[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
                ring: 'before:ring-0',
                background: 'before:bg-[#F9F9F9]',
            },
        },
        table: {
            divide: 'divide-y divide-white',
            tbody: 'divide-y divide-white',
        }

    }
})
