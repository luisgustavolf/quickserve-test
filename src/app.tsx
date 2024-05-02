import { useTranslation } from "react-i18next"
import { AppHeader } from "./components/appHeader/appHeader"

export function App() {
  const { t } = useTranslation()

  return (
    <>
      <AppHeader />
    </>
  )
}
