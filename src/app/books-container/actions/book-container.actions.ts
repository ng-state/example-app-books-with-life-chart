import { HasStore, InjectStore } from 'ng-state';
import { List } from 'immutable';
import { Book } from 'src/app/initial-state';
import { TypedMap } from 'src/app/typed-map';

@InjectStore('books')
export class BookContainerStateActions extends HasStore<List<TypedMap<Book, string, any>>> {
    get test() {
        return this.state.get;
    }
}
