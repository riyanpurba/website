import { useTheme } from "next-themes";
import Image from 'next/image';

const Mode = () => {
    
    const { systemTheme, theme, setTheme } = useTheme();

    const handleMode = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={handleMode}
            className='transition-all duration-100 p-2 rounded-full relative'>
                {
                    currentTheme === "dark" ? (
                        <Image
                            src="/icon/sun.svg"
                            alt="icon"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="icon"
                        />
                    ) : (
                        <Image
                            src="/icon/moon.svg"
                            alt="icon"
                            width={20}
                            height={20}
                            loading="lazy"
                            title="icon"
                        />
                    )
                }
        </button>
    )
}

export default Mode;