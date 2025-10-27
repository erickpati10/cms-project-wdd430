import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent implements OnInit {
  document: Document | null = null;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private windRefService: WindRefService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id);
    });
  }

  onView() {
    if (this.document?.url) {
      this.nativeWindow.open(this.document.url, '_blank');
    }
  }

  onDelete() {
    if (this.document) {
      this.documentService.deleteDocument(this.document);
      this.router.navigate(['/documents']);
    }
  }
}
