<?php

// WordPress Includes
include('../../../wp-load.php');

//header('Content-type: text/xml; charset=utf-8');
echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");

$categories = get_categories();
?>
<Custom Description="<?php bloginfo('name'); ?>">
<?php
	if ($categories) {
		foreach($categories as $cat) {
			// Query Category Posts
			query_posts('posts_per_page=-1&cat=' . $cat->term_id);
?>
	<Category Name="<?php echo($cat->name); ?>">
<?php if(have_posts()) : ?>
	<?php while(have_posts()) : the_post(); ?>
		<Response ID="<?php the_ID(); ?>" Type="Hyperlink">
			<Name><?php the_title(); ?></Name>
			<Content><?php the_permalink(); ?></Content>
			<Tags>
			<?php
			$posttags = get_the_tags();
			if ($posttags) {
				foreach($posttags as $tag) {
			?>
				<Tag><?php echo($tag->name); ?></Tag>
			<?php
				}
			}
			?>
			</Tags>
		</Response>
	<?php endwhile; ?>
<?php endif; ?>
	</Category>
<?php
		}
	}
?>
</Custom>