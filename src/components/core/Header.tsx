import { useEffect } from "react"
import i18n from 'i18next'
import { useTranslation } from "react-i18next";
import { ServiceInjector, SharedService } from "../../services";

const Header = (props: any) => {
    const { t } = useTranslation();
    const sharedService = ServiceInjector.get(SharedService) as SharedService;

    useEffect(() => {
    }, [])

    const onLanguageChange = (e: any) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div>
            <h1>{t('label-hello')}</h1>
            <h3>{sharedService.TestMethod()}</h3>
            <h3>{t('label-change-language')}</h3>
            <select onChange={(e: any) => { onLanguageChange(e) }}>
                <option value="en">English</option>
                <option value="hin">Hindi</option>
            </select>
        </div>
    )
}

export { Header }