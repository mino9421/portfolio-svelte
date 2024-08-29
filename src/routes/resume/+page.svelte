<script>
// @ts-nocheck

	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download="resume.pdf">
				<Chip size={'1.25em'}>Download</Chip>
			</a>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe class="pdf-viewer" src={data} type="application/pdf"></iframe>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: auto;
		& > a {
			color: inherit;
		}
	}
	.pdf-viewer {
    width: 100%;
    height: 80vh; /* Adjust height as needed */
    border: none;
		margin-top: 10px;
  }
</style>
