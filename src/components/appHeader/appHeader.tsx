import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { VenueContext } from "../../contexts/venue/context"
import styles from './styles.module.scss'
import menuIcon from '../../assets/menu.svg'

export interface AppHeaderProps {

}

export function AppHeader(props: AppHeaderProps) {
  const { venue } = useContext(VenueContext)
  const { t } = useTranslation()

  return (
    <div>
      <div
        style={{ backgroundColor: venue?.webSettings.navBackgroundColour }}
        className={styles.barWrap}
      >
        <div className={styles.title}>
          {t('menu')}
        </div>
        <div className={styles.sandwitch}>
          <img src={menuIcon} title="menu" />
        </div>
      </div>
      <div 
        style={{backgroundImage: `url(${venue?.webSettings.bannerImage})`}}
        className={styles.bannerWrap}
      >
      </div>
    </div>
  )
}