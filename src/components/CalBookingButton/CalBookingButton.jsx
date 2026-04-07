import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import Button from '../Button/Button'
import './CalBookingButton.css'

const CAL_NAMESPACE = 'video-editing-discovery-call'
const CAL_LINK = 'aryan-sharma-amw1me/video-editing-discovery-call'
const CAL_CONFIG = JSON.stringify({
    layout: 'month_view',
    useSlotsViewOnSmallScreen: true,
})

function CalBookingButton({
    children,
    variant = 'primary',
    className = '',
    floating = false,
    showFreeBadge = false,
}) {
    useEffect(() => {
        let mounted = true

        async function initCal() {
            const cal = await getCalApi({ namespace: CAL_NAMESPACE })

            if (!mounted) return

            cal('ui', {
                hideEventTypeDetails: false,
                layout: 'month_view',
            })
        }

        initCal()

        return () => {
            mounted = false
        }
    }, [])

    const classes = [
        floating ? 'cal-floating-trigger' : 'cal-inline-trigger',
        showFreeBadge ? 'cal-has-badge' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <Button
            variant={variant}
            className={classes}
            data-cal-namespace={CAL_NAMESPACE}
            data-cal-link={CAL_LINK}
            data-cal-config={CAL_CONFIG}
        >
            <span>{children}</span>
            {showFreeBadge ? <span className="cal-badge mono">Free</span> : null}
        </Button>
    )
}

export default CalBookingButton
