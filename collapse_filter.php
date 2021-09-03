<?php

// No direct access
defined('_JEXEC') or die('Restricted access');

// Require the abstract plugin class
require_once COM_FABRIK_FRONTEND . '/models/plugin-list.php';

class PlgFabrik_ListCollapse_filter extends PlgFabrik_List
{
	
	/**
	 * Return the javascript to create an instance of the class defined in formJavascriptClass
	 *
	 * @param   array  $args  Array [0] => string table's form id to contain plugin
	 *
	 * @return bool
	 */
	public function onLoadJavascriptInstance($args)
	{
		parent::onLoadJavascriptInstance($args);

		$model  = $this->getModel();
        $params = $this->getParams();
		$opts   = $this->getElementJSOptions();

        $opts->table       = $model->getTable()->db_table_name;
		$opts->default 	   = $params->get('collapse_default', '0');
		$opts->collapseAll = $params->get('collapse_all', '0');
		$opts->sideFilters = $params->get('show-table-filters');
		
		$opts              = json_encode($opts);
		$this->jsInstance  = "new FbListCollapse_filter($opts)";

		return true;
	}
	
	/**
	 * Load the AMD module class name
	 *
	 * @return string
	 */
	public function loadJavascriptClassName_result()
	{
		return 'FbListCollapse_filter';
	}
}
