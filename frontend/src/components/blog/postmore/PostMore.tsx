'use client';

import * as S from './styles';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { posts } from '@/data/posts';

export default function PostMore({ currentSlug }: { currentSlug: string }) {
  const { t } = useTranslation();
  const others = posts.filter((p) => p.slug !== currentSlug).slice(0, 2);

  return (
    <S.Section aria-labelledby="more-posts-heading">
      <S.Inner>
        <S.Title id="more-posts-heading">
          {t('post.morePosts')} <em>{t('post.writings')}</em>
        </S.Title>
        <S.Grid role="list">
          {others.map((post) => (
            <S.Card key={post.slug} cardColor={post.accentColor}>
              <S.CardLink href={`/blog/${post.slug}`}>
                <S.CardBar className="card-bar" aria-hidden="true" />
                <S.CardBody>
                  <S.Meta>
                    <S.Tag>{post.primaryTag}</S.Tag>
                    <S.DateEl dateTime={post.datetime}>{post.date}</S.DateEl>
                  </S.Meta>
                  <S.CardTitle className="card-title">
                    <T en={post.title.en} pt={post.title.pt} />
                  </S.CardTitle>
                  <S.Footer>
                    <S.ReadTime>{post.readTime} {t('blog.minRead')}</S.ReadTime>
                    <S.Arrow className="card-arrow" aria-hidden="true">↗</S.Arrow>
                  </S.Footer>
                </S.CardBody>
              </S.CardLink>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
