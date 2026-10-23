import { Fragment } from "react";
import { ChevronRightIcon } from "./Icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li>
                {isCurrent || !item.href ? (
                  <span aria-current={isCurrent ? "page" : undefined} className="font-medium text-ink">
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} className="text-muted transition-colors hover:text-primary">
                    {item.label}
                  </a>
                )}
              </li>
              {!isCurrent && (
                <li aria-hidden className="text-subtle">
                  <ChevronRightIcon className="size-3" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
