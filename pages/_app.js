import '../styles/bulma.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StoreProvider } from '../context/StoreContext';

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();
	return (
		<StoreProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={true} />
			</QueryClientProvider>
		</StoreProvider>
	);
}

export default MyApp;
