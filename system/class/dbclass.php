<?
class dbclass {	
	var $CONN;			 
	function dbclass($server = DB_SERVER, $username = DB_USERNAME, $password = DB_PASSWORD, $database = DB_DATABASE) { 
		$conn = mysql_connect($server,$username,$password);	
		if(!$conn) {	
			$this->error("Connection attempt failed");		
		}
		if(!mysql_select_db($database,$conn)) {	
			$this->error("Database Selection failed");		
		}
		$this->CONN = $conn;
		return true;
	}
	
	function close(){
		$conn = $this->CONN ;
		$close = mysql_close($conn);
		if(!$close){
			$this->error("Close Connection Failed");	
		}
		return true;
	}
	
	function error($text) {
		$no = mysql_errno();
		$msg = mysql_error();
		echo "<hr><font face=verdana size=2>";
		echo "<b>Custom Message :</b> $text<br><br>";
		echo "<b>Error Number :</b> $no<br><br>";
		echo "<b>Error Message	:</b> $msg<br><br>";
		echo "<hr></font>";
		exit;
	}
	
	function select($sql="") {
		if(empty($sql)) { return false; }
		if(!eregi("^select",$sql)) {	
			echo "Wrong Query<hr>$sql<p>";
			return false;		
		}
		if(empty($this->CONN)) { return false; }
		$conn = $this->CONN;
		$results = @mysql_query($sql,$conn);			
		if((!$results) or empty($results)) { return false; }
		$count = 0;
		$data  = array();
		while ( $row = mysql_fetch_array($results))	{	
			$data[$count] = $row;
			$count++;		
		}
		mysql_free_result($results);
		return $data;
	}	
	
	function insert($sql=""){
		if(empty($sql)) { return false; }
		if(!eregi("^insert",$sql)){	return false; }
		if(empty($this->CONN)){	return false; }
		$conn = $this->CONN;			
	    $results = mysql_query($sql);	
		if(!$results)
			$id = 0; 
		else
			$id = mysql_insert_id();  
		return $id;
	}
	
	function update($sql="") {
		if(empty($sql)) { return false; }
		if(!eregi("^update",$sql)) { return false; }
		if(empty($this->CONN)) { return false; }
		$conn = $this->CONN;
		$results = @mysql_query($sql,$conn);			
		if(!$results) {	
			$id = 0; 
		} else {
			$id = mysql_insert_id();
		}
		return $id;
	}
	
	function db_delete($result) {
        return mysql_query($result);
	}

	function sql_query($sql="")	{	
		if(empty($sql)) { return false; }
		if(empty($this->CONN)) { return false; }
		$conn = $this->CONN;
		$results = mysql_query($sql,$conn) or $this->error("Something wrong in query<hr>$sql<hr>");
		if(!$results){
		   $this->error("Query went bad ! <hr>$sql<hr>");
			return false;		
		}		
		if(!eregi("^select",$sql)) {
			return true; 		
		} else {
			$count = 0;
			$data = array();
			while ($row = mysql_fetch_array($results)) {
				$data[$count] = $row;
				$count++;
			}
			mysql_free_result($results);
			return $data;
		 }
	}	

    function affected($sql="")	{
		if(empty($sql)) { return false; }
		if(!eregi("^select",$sql)){
		  	echo "Wrong Query<hr>$sql<p>";
			return false;
		}
		if(empty($this->CONN)) 	{ 	return false; 	}
		$conn = $this->CONN;
		$results = @mysql_query($sql,$conn);
		if( (!$results) or (empty($results)) ) {	return false;	}
		$tot=0;
		$tot=mysql_affected_rows();
		return $tot;
	}

	function table_exists($tablename) {
		$conn = $this->CONN ;
		if(empty($conn)) { return false; }
		$results = mysql_list_tables(DB_DATABASE) or die("Could not access Table List...<hr>" . mysql_error());
		if(!$results){ 
			$message = "Query went bad!";	
			die($message);
			return false;
		} else {
			$count = 0;
			$data = array();
			while ( $row = mysql_fetch_array($results)) {
				if ($row[0]==$tablename) {
					return true;
					exit;
				}
			}
			mysql_free_result($results);
			return false;
		}
	}
		
	function fetchColum($table) {
		$sql = "SHOW COLUMNS FROM $table";
		if(empty($sql)) { return false; }
		if(empty($this->CONN)) { return false; }
		$conn = $this->CONN;
		$results = mysql_query($sql, $conn) or $this->error("Something wrong in query<hr>$sql<hr>");
		$rowResult = mysql_fetch_array($results);
		if (mysql_num_rows($results) > 0) {
			while ($row = mysql_fetch_assoc($result)) {
			   print_r($row);
			}
		}
	}
	
	function db_fetch_row($result) {
        return mysql_fetch_row($result);
	}
	
	function db_free_result($result) {
        @mysql_free_result($result);
	}
	
	function db_num_rows($result) {
       return mysql_num_rows($result);
	}
	
	function db_num_fields($result) {
       return mysql_num_fields($result);
	}
	
	function db_field_name($result,$n) {
       return mysql_field_name($result,$n);
	}
	
	function db_field_type($result,$n) {
       return mysql_field_type($result,$n);
	}
}
?>
