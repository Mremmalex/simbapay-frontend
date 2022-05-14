import React from "react";
import styles from "./Table.module.scss";

export default function Table() {
	return (
		<section className={styles.table}>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>from</th>
						<th>Type</th>
						<th>to</th>
						<th>currency</th>
						<th>amount</th>
						<th>Created At</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>23</td>
						<td>john</td>
						<td>233jhjdkhdjkjhkj</td>
						<td>233jhjdkhdjkjhkj</td>
						<td>233jhjdkhdjkjhkj</td>
						<td>233jhjdkhdjkjhkj</td>
						<td>233jhjdkhdjkjhkj</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
