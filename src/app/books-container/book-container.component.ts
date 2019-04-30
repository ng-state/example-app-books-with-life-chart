import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { ComponentState, HasStateActions } from 'ng-state';
import { BookContainerStateActions } from './actions/book-container.actions';

@ComponentState(BookContainerStateActions)
@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookContainerComponent extends HasStateActions<BookContainerStateActions> {
    constructor(cd: ChangeDetectorRef) {
        super(cd);
    }
}
