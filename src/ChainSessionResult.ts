import { ChainSession } from 'ChainSession';

export class ChainSessionResult<T> {
	public constructor(private session: ChainSession, private data: T) {}

	public wasCancelled() {
		return this.session.isCancelled();
	}

	public getData() {
		return this.data;
	}
}
