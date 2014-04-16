<?php

 class Pagery 

   { 

       function getPagerData($numHits, $limit, $page) 

       { 

           $numHits  = (int) $numHits; 

           $limit    = max((int) $limit, 1); 

           $page     = (int) $page; 

           $numPages = ceil($numHits / $limit); 



           $page = max($page, 1); 

           $page = min($page, $numPages); 



           $offset = ($page - 1) * $limit; 



           $ret = new stdClass; 



           $ret->offset   = $offset; 

           $ret->limit    = $limit; 

           $ret->numPages = $numPages; 

           $ret->page     = $page; 



           return $ret; 

       } 

   }
function paginationNew($total_pages, $page, $key = ''){ 
    global $webpage;
    $pagination=' <ul>';
    if($total_pages!=1){
        $max = 10;
        $shift = 5;
        if(!empty($key))
			$keyUrl = "&key=$key";
        $max_links = $max+1;
        $h=1;  
        if($total_pages>=$max_links)
		{
            if(($page>=$max_links-$shift)&&($page<=$total_pages-$shift))
			{  
                $max_links = $page+$shift;
                $h=$max_links-$max;
            }
            if($page>=$total_pages-$shift+1)
			{
                $max_links = $total_pages+1;
                $h=$max_links-$max;
            } 
        } 
		else 
		{
            $h=1;
            $max_links = $total_pages+1;
        }
        if($page>'1'){
            $pagination.= '<li ><a href="'.$webpage.'?page='.($page-1).$key.'" class="previous01">Previous</a></li >';
        }
        $pagination .= '';
        for ($i=$h;$i<$max_links;$i++)
		{
            if($i==$page)
			{
                $pagination.='<li><a href="javascript:void(0)" class="active">'.(int)$i.'</a></li>  ';
            } 
			else 
			{ 
                $pagination.= '<li><a href="'.$webpage.'?page='.(int)$i.$key.'">'.(int)$i.'</a></li>';
            }
        }
		$pagination .= '';
        if(($page >='1')&&($page!=$total_pages)){
            $pagination.= '<li><a href="'.$webpage.'?page='.($page+1).$key.'" class="next01">Next</a></li>';
        }
    }  
	else 
	{
        $pagination.='<li><a href="javascript:void(0)" class="active">1</a>';
    }
   	$pagination.='</ul>';
    return($pagination);
}
?>