import AstronautLostSignal from "@/components/illustrations/signal-lost";
import ErrorPageBase from "@/components/layout/ErrorPageBase";

export default function NotFound() {
	return (
		<ErrorPageBase
			errorCode="404"
			title="Signal lost"
			description="This page drifted out of orbit — it doesn't exist, was renamed, or got taken down. Let's get you back on course."
		>
			<AstronautLostSignal />
		</ErrorPageBase>
	);
}
